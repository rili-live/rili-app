import * as bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as path from 'path';
import { argv } from 'yargs';
import printLogs from 'rili-public-library/utilities/print-logs.js';
import connection from './store/connection';
import AuthRoutes from './api/routes/AuthRoutes';
import UserRoutes from './api/routes/UserRoutes';
import { version as packageVersion } from '../package.json';

export const shouldPrintAllLogs = argv.withAllLogs;
export const shouldPrintSQLLogs = argv.withSQLLogs || shouldPrintAllLogs;
export const shouldPrintServerLogs = argv.withServerLogs || shouldPrintAllLogs;

const originWhitelist = [process.env.CLIENT_URI];
const corsOptions = {
    origin(origin: any, callback: any) {
        if (originWhitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

const API_BASE_ROUTE = `/v${packageVersion.split('.')[0]}`;

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
} else {
    app.use(cors(corsOptions));
}

// Serves static files in the /build/static directory
app.use(express.static(path.join(__dirname, 'static')));

// Configure routes
app.use(API_BASE_ROUTE, (new AuthRoutes(connection)).router);
app.use(API_BASE_ROUTE, (new UserRoutes(connection)).router);

const { API_PORT } = process.env;

const server = app.listen(API_PORT, () => {
    printLogs({
        shouldPrintLogs: true,
        messageOrigin: 'API_SERVER',
        messages: [`Server running on port ${API_PORT} with process id`, process.pid],
    });
});

// Hot Module Reloading
type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void,
        ): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
