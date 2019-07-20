import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AccessControl from 'rili-public-library/react-components/AccessControl';
import { IUserState } from 'types/user';
import SocketActions from 'actions/socket';
import { bindActionCreators } from 'redux';

interface IHeaderDispatchProps {
    logout: Function;
}

interface IStoreProps extends IHeaderDispatchProps {
    user: IUserState;
}

// Regular component props
interface IHeaderProps extends IStoreProps {
  goHome: Function;
  isAuthorized: boolean;
}

const mapStateToProps = (state: any) => {
  return {
      user: state.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
      logout: SocketActions.logout,
  }, dispatch);
};

export class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  handleLogout = () => {
    const { logout, user, goHome } = this.props;
    logout(user.details).then(() => {
      goHome();
    });
  }

  render() {
    const { isAuthorized } = this.props;
    return (
      <header>
        <AccessControl isAuthorized={isAuthorized} publicOnly>
          <div className="login-link"><Link to="/login">Login</Link></div>
        </AccessControl>
        <AccessControl isAuthorized={isAuthorized}>
          <button type="button" className="logout-button" onClick={this.handleLogout}>Logout</button>
        </AccessControl>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
