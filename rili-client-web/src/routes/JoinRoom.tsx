import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Input from 'rili-public-library/react-components/Input';
import ButtonPrimary from 'rili-public-library/react-components/ButtonPrimary';
import { ISocketState } from 'types/socket';
import translator from '../services/translator';
// import * as globalConfig from '../../../global-config.js';

interface IJoinRoomRouterProps {
}

interface IJoinRoomDispatchProps {
    joinRoom: Function;
}

interface IStoreProps extends IJoinRoomDispatchProps {
    socket: ISocketState;
}

// Regular component props
interface IJoinRoomProps extends RouteComponentProps<IJoinRoomRouterProps>, IStoreProps {
}

interface IJoinRoomState {
    hasJoinedARoom: boolean;
    inputs: any;
    roomsList: any;
}

// Environment Variables
// const envVars = globalConfig[process.env.NODE_ENV];

const mapStateToProps = (state: any) => {
    return {
        socket: state.socket,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
    }, dispatch);
};

// const handleSessionUpdate = (message: any) => {
//     console.log('SESSION_UPDATE:', message); // tslint:disable-line no-console
// };

/**
 * JoinRoom
 */
export class JoinRoomComponent extends React.Component<IJoinRoomProps, IJoinRoomState> {
    // private sessionToken: string;
    private translate: Function;

    // static getDerivedStateFromProps(nextProps: IJoinRoomProps, nextState: IJoinRoomState) {
    //     if (!!nextProps.socket.user.userName && !nextState.inputs.userName) {
    //         return {
    //             inputs: {
    //                 userName: nextProps.socket.user.userName,
    //                 roomId: 'general-chat'
    //             }
    //         };
    //     } else {
    //         return {};
    //     }
    // }

    constructor(props: IJoinRoomProps) {
        super(props);

        this.state = {
            hasJoinedARoom: false,
            inputs: {
                roomId: 'general-chat'
            },
            roomsList: [],
        };

        // this.sessionToken = '';
        this.translate = (key: string, params: any) => translator('en-us', key, params);
    }

    componentDidMount() {
        document.title = 'Rili | Join a Room';
    }

    onInputChange = (name: string, value: string) => {
        const newInputChanges = {
            [name]: value,
        };
        this.setState({
            inputs: {
                ...this.state.inputs,
                ...newInputChanges
            }
        });
    }

    onButtonClick = (event: any) => {
        switch (event.target.id) {
            case 'join_room':
            case 'room_name':
            case 'user_name':
            if (!this.shouldDisableInput('room')) {
                this.props.history.push(`/chat-room/${this.state.inputs.roomId}`);
            }
        }
    }

    shouldDisableInput = (buttonName: string) => {
        switch (buttonName) {
            case 'room':
                return !this.state.inputs.roomId /* || !this.state.inputs.userName */;
        }
    }

    public render(): JSX.Element | null {
        const { socket } = this.props;
        let activeRooms = socket && socket.rooms.length > 0 && socket.rooms.map(room => room.roomKey).toString();

        return (
            <div>
                <h1 className="center">Join a Room</h1>
                {/* <label htmlFor="user_name">Username:</label>
                <Input
                    type="text"
                    id="user_name"
                    name="userName"
                    value={this.state.inputs.userName}
                    onChange={this.onInputChange}
                    onEnter={this.onButtonClick}
                    translate={this.translate}
                    disabled={true}
                /> */}

                <label htmlFor="room_name">Room:</label>
                <Input type="text" id="room_name" name="roomId" value={this.state.inputs.roomId} onChange={this.onInputChange} onEnter={this.onButtonClick} translate={this.translate} />
                {
                    socket && socket.rooms &&
                    <span className="rooms-list">
                        {
                            socket.rooms.length < 1
                                ? <i>No rooms are currently active. Click 'Join Room' to start a new one.</i>
                                : <span>Active Rooms: <i>{activeRooms}</i></span>
                        }
                    </span>
                }

                <div className="form-field text-right">
                    <ButtonPrimary id="join_room" text="Join Room" onClick={this.onButtonClick} disabled={this.shouldDisableInput('room')} />
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinRoomComponent));