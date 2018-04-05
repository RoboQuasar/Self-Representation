import React from 'react';

import Auth from 'components/Auth';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import AuthButton from './AuthButton';

export class Menu extends React.PureComponent {
  render() {
    return (
      <Navigation>
        <NavigationItem href="#">навыки</NavigationItem>
        <NavigationItem href="#">портфолио</NavigationItem>
        <AuthButton>Личный профиль</AuthButton>
        <Auth />
      </Navigation>
    );
  }
}

export default Menu;
