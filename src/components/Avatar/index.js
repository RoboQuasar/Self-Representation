import React from 'react';

import AvatarWrapper from './AvatarWrapper';
import Img from './Img';

export class Avatar extends React.PureComponent {
  render() {
    return (
      <AvatarWrapper>
        <Img src={this.props.avatarSrc} alt="SR AVATAR" />
      </AvatarWrapper>
    );
  }
}

export default Avatar;
