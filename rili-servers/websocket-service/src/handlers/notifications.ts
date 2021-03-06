import * as socketio from 'socket.io';
import printLogs from 'rili-js-utilities/print-logs';
import { SocketServerActionTypes, SOCKET_MIDDLEWARE_ACTION } from 'rili-js-utilities/constants';
import beeline from '../beeline';
import globalConfig from '../../../../global-config';
import restRequest from '../utilities/restRequest';

interface IUpdateNotificationData {
    notification: any;
    userName: string;
}

const updateNotification = (socket: socketio.Socket, data: IUpdateNotificationData) => {
    printLogs({
        level: 'info',
        messageOrigin: 'SOCKET_IO_LOGS',
        messages: `User, ${data.userName} with socketId ${socket.id}, updated a notification`,
        tracer: beeline,
        traceArgs: {
            socketId: socket.id,
        },
    });
    restRequest({
        method: 'put',
        url: `${globalConfig[process.env.NODE_ENV || 'development'].baseUsersServiceRoute}/users/notifications/${data.notification.id}`,
        data: {
            isUnread: data.notification.isUnread,
        },
    }, socket).then((response) => {
        socket.emit(SOCKET_MIDDLEWARE_ACTION, {
            type: SocketServerActionTypes.NOTIFICATION_UPDATED,
            data: {
                ...data.notification,
                ...response.data,
            },
        });
    });
};

export default updateNotification;
