import * as moment from 'moment';
import * as socketio from 'socket.io';
import printLogs from 'rili-public-library/utilities/print-logs'; // tslint:disable-line no-implicit-dependencies
import { SocketServerActionTypes } from 'rili-public-library/utilities/constants';
import * as Constants from '../../constants';
import { rsAppName, shouldPrintRedisLogs, shouldPrintSocketLogs } from '../../server-socket-io';

interface ILoginData {
    idToken: string;
    userName: string;
}

const login = (socket: socketio.Socket, redisSession: any, data: ILoginData) => {
    const now = moment(Date.now()).format('MMMM D/YY, h:mma');

    if (socket.handshake && socket.handshake.headers && socket.handshake.headers.host) {
        redisSession.remove(socket.id).then((response: any) => {
            socket.emit(Constants.ACTION, {
                type: SocketServerActionTypes.SESSION_CLOSED_MESSAGE,
                data: response,
            });
        }).catch((err: any) => {
            printLogs({
                shouldPrintLogs: shouldPrintRedisLogs,
                messageOrigin: 'REDIS_SESSION_ERROR',
                messages: err.toString(),
            });
        });
    }

    printLogs({
        shouldPrintLogs: shouldPrintSocketLogs,
        messageOrigin: 'SOCKET_IO_LOGS',
        messages: `User, ${data.userName} with socketId ${socket.id}, has LOGGED OUT.`,
    });

    // Emits an event back to the client who logged OUT
    socket.emit(Constants.ACTION, {
        type: SocketServerActionTypes.USER_LOGOUT_SUCCESS,
        data: {
            message: {
                key: Date.now().toString(),
                time: now,
                text: `You have been logged in successfully.`,
            },
            userName: data.userName,
        },
    });
};

export default login;
