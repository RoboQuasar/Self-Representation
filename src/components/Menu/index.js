import React from 'react';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';

export class Menu extends React.PureComponent {
  render() {
    return (
      <Navigation>
        <NavigationItem href="#">навыки</NavigationItem>
        <NavigationItem href="#">портфолио</NavigationItem>
      </Navigation>
    );
  }
}

export default Menu;
