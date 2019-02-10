import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NameInput from 'components/TextInput';
import EditNameButton from 'components/EditButton';
import EditPostButton from 'components/EditButton';

import PersonalInfoWrapper from './PersonalInfoWrapper';
import PostInput from './PostInput';

export class PersonalInfo extends React.PureComponent {
  state = {
    fullName: this.props.account.fullName,
    defaultPostValue: 'Front-end developer',
    isNameNotEditable: true,
    isPostNotEditable: true
  };

  handleEditNameClick = () => {
    this.setState({ isNameNotEditable: false }, () => this.name.focus());
  };

  handleEditPostClick = () => {
    this.setState({ isPostNotEditable: false }, () => this.post.focus());
  };

  handleInputBlur = e => {
    if (e.target.value === '') e.target.value = e.target.defaultValue;
    this.setState({
      isNameNotEditable: true,
      isPostNotEditable: true
    });
  };

  render() {
    return (
      <PersonalInfoWrapper>
        <NameInput
          type="text"
          defaultValue={this.state.fullName}
          name="name-input"
          maxLength="20"
          innerRef={n => {
            this.name = n;
          }}
          disabled={this.state.isNameNotEditable}
          onBlur={this.handleInputBlur}
        />

        {this.props.account && (
          <EditNameButton
            type="button"
            name="edit-name"
            top="0"
            onClick={this.handleEditNameClick}
          />
        )}

        <PostInput
          type="text"
          defaultValue={this.state.defaultPostValue}
          name="post-input"
          maxLength="30"
          innerRef={p => {
            this.post = p;
          }}
          disabled={this.state.isPostNotEditable}
          onBlur={this.handleInputBlur}
        />

        {this.props.account && (
          <EditPostButton
            type="button"
            name="edit-post"
            top="50%"
            onClick={this.handleEditPostClick}
          />
        )}
      </PersonalInfoWrapper>
    );
  }
}

PersonalInfo.propTypes = {
  account: PropTypes.object
};

export function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export default connect(
  mapStateToProps,
  null
)(PersonalInfo);
