import * as React from 'react';
import { Route, Redirect, RedirectProps } from 'react-router-dom';

interface IRedirectWithStatusProps extends RedirectProps {
    statusCode: String | number;
}

class RedirectWithStatus extends React.Component<IRedirectWithStatusProps, any> {
    constructor(props: IRedirectWithStatusProps) {
        super(props);
    }

    render() {
        const { from, statusCode, to } = this.props;

        const renderRoute = ({ staticContext }: any) => {
            if (staticContext) {
                staticContext.statusCode = statusCode;
            }

            return (
                <Redirect from={from} to={to}/>
            );
        };

        return (<Route render={renderRoute} />);
    }
}

export default RedirectWithStatus;
