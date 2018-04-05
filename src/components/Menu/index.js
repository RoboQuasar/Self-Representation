import React from 'react';

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

  render() {
    return (
      <Navigation>
        <NavigationItem href="#">навыки</NavigationItem>
        <NavigationItem href="#">портфолио</NavigationItem>

        <AuthButton onClick={this.handleAuthButtonClick}>
          Личный профиль
        </AuthButton>

        {this.state.isAuthOpen && <Auth onClose={this.handleAuthClose} />}
      </Navigation>
    );
  }
}

export default Menu;
