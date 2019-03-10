import * as http from 'http';
import * as https from 'https';
import * as path from 'path';
import * as express from 'express';
import * as fs from 'fs';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import printLogs from 'rili-public-library/utilities/print-logs'; // tslint:disable-line no-implicit-dependencies
import * as globalConfig from '../../global-config.js';
import routeConfig from './routeConfig';
import rootReducer from './redux/reducers';
import socketIOMiddleWare from './socket-io-middleware';

// TODO: RFRONT-9: Fix window is undefined hack
declare global {
    namespace NodeJS {
        interface Global { // tslint:disable-line
            window: any;
        }
    }
}

if (!process.env.BROWSER) {
    global.window = {}; // Temporarily define window for server-side
}
import Layout from './components/layout';
import routes, { IRoute } from './routes';

// Initialize the server and configure support for handlebars templates
const createAppServer = () => {
    let app = express();
    let server;
    if (process.env.NODE_ENV === 'development') {
        server = http.createServer(app);
    } else if (process.env.NODE_ENV === 'production') {
        let httpsCredentials = {
            key: fs.readFileSync(globalConfig[process.env.NODE_ENV].security.keyLocation),
            cert: fs.readFileSync(globalConfig[process.env.NODE_ENV].security.certLocation),
        };
        server = https.createServer(httpsCredentials, app);
    }

    return {
        app,
        server
    };
};

const { app, server } = createAppServer();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Define the folder that will be used for static assets
app.use(express.static(path.join(__dirname + '/../build/static/')));

// Universal routing and rendering for SEO
for (let i in routeConfig) {
    let routePath = routeConfig[i].route;
    let routeView = routeConfig[i].view;
    let title = routeConfig[i].head.title;

    app.get(routePath, (req, res) => {
        let promises: any = [];
        const staticContext: any = {};
        const initialState = {};
        const store = createStore(
            rootReducer,
            initialState,
            applyMiddleware(
                socketIOMiddleWare,
                thunkMiddleware,
            )
        );

        routes.some((route: IRoute) => {
            const match = matchPath(req.url, route);
            if (match && route.fetchData) {
                const Comp = route.component.WrappedComponent;
                const initData = (Comp && route.fetchData) || (() => Promise.resolve());
                // fetchData calls a dispatch on the store updating the current state before render
                promises.push(initData(store));
            }
            return !!match;
        });

        Promise.all(promises).then(() => {
            const markup = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={staticContext}>
                        <Layout />
                    </StaticRouter>
                </Provider>
            );

            // This gets the initial state created after all dispatches are called in fetchData
            Object.assign(initialState, store.getState());

            const state = JSON.stringify(initialState);

            if (staticContext.url) {
                printLogs(true, 'SERVER_CLIENT', null, 'Somewhere a <Redirect> was rendered');
                res.writeHead(staticContext.statusCode, {
                    'Location': staticContext.url
                });
                res.end();
            } else {
                return res.render(routeView, {title, markup, state});
            }
        });

    });
}

// Start the server
const port = globalConfig[process.env.NODE_ENV].clientPort;
server.listen(port, (err: any) => {
    if (err) {
        return console.error(err);
    }
    printLogs(true, 'SERVER_CLIENT', null, `Server running on port, ${port}, with process id ${process.pid}`);
});