import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AccessControl from 'rili-public-library/react-components/AccessControl.js';
import SvgButton from 'rili-public-library/react-components/SvgButton.js';
import { IUserState } from 'types/user';
import SocketActions from 'actions/Socket';
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
  toggleNavMenu: Function;
}

const mapStateToProps = (state: any) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    logout: SocketActions.logout,
}, dispatch);

export class HeaderComponent extends React.Component<IHeaderProps> {
  handleLogout = () => {
      const {
          logout,
          user,
          goHome,
      } = this.props;

      logout(user.details).then(() => {
          goHome();
      });
  }

  render() {
      const { isAuthorized, toggleNavMenu } = this.props;
      return (
          <header>
              <AccessControl isAuthorized={isAuthorized} publicOnly>
                  <div className="login-link"><Link to="/login">Login</Link></div>
              </AccessControl>
              <AccessControl isAuthorized={isAuthorized}>
                  {/* <button type="button" className="primary text-white logout-button" onClick={this.handleLogout}>Logout</button> */}
                  <SvgButton
                      id="header_account_button"
                      name="account"
                      className="account-button"
                      onClick={toggleNavMenu}
                      buttonType="primary"
                  />
              </AccessControl>
          </header>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
