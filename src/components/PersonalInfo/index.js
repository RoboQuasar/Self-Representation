import React from 'react';

import NameInput from 'components/TextInput';

import PersonalInfoWrapper from './PersonalInfoWrapper';
import PostInput from './PostInput';

export class PersonalInfo extends React.PureComponent {
  render() {
    return (
      <PersonalInfoWrapper>
        <NameInput
          type="text"
          value="Синеоков Роман"
          name="name-input"
          maxLength="30"
        />
        <PostInput
          type="text"
          value="Front-end developer"
          name="post-input"
          maxLength="30"
        />
      </PersonalInfoWrapper>
    );
  }
}

export default PersonalInfo;
