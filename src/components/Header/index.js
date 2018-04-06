import React from 'react';

import Menu from 'containers/Menu';
import PersonalInfo from 'containers/PersonalInfo';
import Contacts from 'containers/Contacts';

import Avatar from 'components/Avatar';

import HeaderWrapper from './HeaderWrapper';

export class Header extends React.PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Avatar avatarSrc="avatar.jpg" />
        <PersonalInfo />
        <Contacts />
        <Menu />
      </HeaderWrapper>
    );
  }
}

export default Header;
