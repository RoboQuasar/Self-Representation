import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetAccount } from 'actions';

import Auth from 'components/Auth';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import AuthButton from './AuthButton';

export class Menu extends React.PureComponent {
  state = {
    isAuthOpen: false
  };

  handleAuthButtonClick = () => this.setState({ isAuthOpen: true });

  handleAuthClose = () => this.setState({ isAuthOpen: false });

  handleLogoutClick = () => this.props.resetAccount();

  render() {
    return (
      <Navigation>
        <NavigationItem href="#">навыки</NavigationItem>
        <NavigationItem href="#">портфолио</NavigationItem>

        {this.props.account ? (
          <AuthButton onClick={this.handleLogoutClick}>
            выйти из профиля
          </AuthButton>
        ) : (
          <AuthButton onClick={this.handleAuthButtonClick}>
            Личный профиль
          </AuthButton>
        )}

        {this.state.isAuthOpen && <Auth onClose={this.handleAuthClose} />}
      </Navigation>
    );
  }
}

Menu.propTypes = {
  resetAccount: PropTypes.func,
  account: PropTypes.obj
};

export function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    resetAccount: () => dispatch(resetAccount())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
