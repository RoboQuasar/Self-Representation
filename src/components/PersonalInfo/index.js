import React from 'react';

import NameInput from 'components/TextInput';
import EditNameButton from 'components/EditButton';
import EditPostButton from 'components/EditButton';

import PersonalInfoWrapper from './PersonalInfoWrapper';
import PostInput from './PostInput';

class PersonalInfo extends React.PureComponent {
  name = React.createRef();
  post = React.createRef();

  state = {
    nameValue: 'Синеоков Роман',
    postValue: 'Front-end developer'
  };

  handleEditNameText = () => {
    this.name.focus();
  };

  handleEditPostText = () => {
    this.post.focus();
  };

  render() {
    return (
      <PersonalInfoWrapper>
        <NameInput
          type="text"
          value={this.state.nameValue}
          name="name-input"
          maxLength="20"
          ref={this.name}
        />
        <EditNameButton
          type="button"
          name="edit-name"
          top="0"
          onClick={this.handleEditNameText}
        />

        <PostInput
          type="text"
          value={this.state.postValue}
          name="post-input"
          maxLength="30"
          ref={this.post}
        />
        <EditPostButton
          type="button"
          name="edit-post"
          top="50%"
          onClick={this.handleEditPostText}
        />
      </PersonalInfoWrapper>
    );
  }
}

export default PersonalInfo;
