import Immutable from 'seamless-immutable';
import { SocketServerActionTypes } from 'rili-public-library/utilities/constants.js';
import { IMessageList, ISocketState } from 'types/socket';

const initialState: ISocketState = Immutable.from({
    rooms: Immutable.from([]),
    messages: {},
});

const socket = (state: ISocketState = initialState, action: any) => {
    // If state is initialized by server-side rendering, it may not be a proper immutable object yet
    if (!state.setIn) {
        state = state ? Immutable.from(state) : initialState; // eslint-disable-line no-param-reassign
    }

    let prevMessageList: any = [];

    if (action.data && action.data.message) {
        prevMessageList = (state.messages[action.data.roomId] && state.messages[action.data.roomId].asMutable()) || [];
        prevMessageList.push(action.data.message);
    }
    const updatedMessageList: IMessageList = Immutable(prevMessageList);

    switch (action.type) {
        case SocketServerActionTypes.SEND_ROOMS_LIST:
            // Any time this action is called, the data will be a full room list from the server
            return state.setIn(['rooms'], action.data);
        case SocketServerActionTypes.JOINED_ROOM:
            return state
                .setIn(['messages', action.data.roomId], updatedMessageList);
        case SocketServerActionTypes.LEFT_ROOM:
            return state.setIn(['messages', action.data.roomId], updatedMessageList);
        case SocketServerActionTypes.OTHER_JOINED_ROOM:
        case SocketServerActionTypes.SEND_MESSAGE:
            return state.setIn(['messages', action.data.roomId], updatedMessageList);
        default:
            return state;
    }
};

export default socket;
