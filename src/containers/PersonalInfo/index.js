import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import EditPostButton from 'components/EditButton';

import PersonalInfoWrapper from './PersonalInfoWrapper';
import PostInput from './PostInput';

export class PersonalInfo extends React.PureComponent {
  state = {
    defaultPostValue: 'Front-end developer',
    isPostNotEditable: true
  };

  handleEditPostClick = () => {
    this.setState({ isPostNotEditable: false }, () => this.post.focus());
  };

  handleInputBlur = e => {
    if (e.target.value === '') e.target.value = e.target.defaultValue;
    this.setState({ isPostNotEditable: true });
  };

  render() {
    return (
      <PersonalInfoWrapper>
        <span style={{ font: 'bolder 30px sans-serif', color: '#fff' }}>
          {this.props.account.get('fullName')}
        </span>

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

        {this.props.auth.get('isLogin') && (
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
  account: PropTypes.shape({
    fullName: PropTypes.string,
    avatarSrc: PropTypes.string
  }),
  auth: PropTypes.shape({
    isLogin: PropTypes.bool
  })
};

PersonalInfo.defaultProps = {
  account: new Map(),
  auth: new Map()
};

export function mapStateToProps(state) {
  return {
    account: state.get('account'),
    auth: state.get('auth')
  };
}

export default connect(
  mapStateToProps,
  null
)(PersonalInfo);
