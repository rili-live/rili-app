enum SocketServerActionTypes {
    DISCONNECT = 'SERVER:DISCONNECT',
    JOINED_ROOM = 'SERVER:JOINED_ROOM',
    OTHER_JOINED_ROOM = 'SERVER:OTHER_JOINED_ROOM',
    USER_LOGIN_SUCCESS = 'SERVER:USER_LOGIN_SUCCESS',
    SEND_ROOMS_LIST = 'SERVER:SEND_ROOMS_LIST',
    SEND_MESSAGE = 'SERVER:SEND_MESSAGE',
    SESSION_MESSAGE = 'SERVER:SESSION_MESSAGE',
}

export default SocketServerActionTypes;