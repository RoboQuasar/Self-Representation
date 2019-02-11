import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from 'actions';

import Auth from 'components/Auth';
import AuthButton from 'components/ConfirmButton';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';

export class Menu extends React.PureComponent {
  state = {
    isAuthOpen: false
  };

  handleAuthButtonClick = () => this.setState({ isAuthOpen: true });

  handleAuthClose = () => this.setState({ isAuthOpen: false });

  handleLogoutClick = () => {
    this.props.logout();
  };

  render() {
    return (
      <Navigation>
        <NavigationItem href="#">навыки</NavigationItem>
        <NavigationItem href="#">портфолио</NavigationItem>

        {this.props.auth.isLogin ? (
          <AuthButton onClick={this.handleLogoutClick} margin="10px auto 0">
            выйти из профиля
          </AuthButton>
        ) : (
          <AuthButton onClick={this.handleAuthButtonClick} margin="10px auto 0">
            Личный профиль
          </AuthButton>
        )}

        {this.state.isAuthOpen && <Auth onClose={this.handleAuthClose} />}
      </Navigation>
    );
  }
}

Menu.propTypes = {
  logout: PropTypes.func,
  auth: PropTypes.shape({
    isLogin: PropTypes.bool
  })
};

Menu.defaultProps = {
  logout: () => {},
  auth: {}
};

export function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
