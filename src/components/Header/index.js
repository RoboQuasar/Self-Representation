import React from 'react';

import Avatar from 'components/Avatar';
import PersonalInfo from 'components/PersonalInfo';
import Contacts from 'components/Contacts';
import Menu from 'components/Menu';

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
