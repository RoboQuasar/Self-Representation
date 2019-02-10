import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditButton from 'components/EditButton';

import AvatarWrapper from './AvatarWrapper';
import EditForm from './EditForm';
import Submit from './Submit';
import Img from './Img';
import Label from './Label';
import Input from './Input';

export class Avatar extends React.PureComponent {
  state = {
    isEditableAvatar: false,
    isShowSubmitBtn: false,
    avatarSrc: ''
  };

  handleEditAvatarClick = () => {
    this.setState({ isEditableAvatar: !this.state.isEditableAvatar });
  };

  handleDownloadAvatar = e => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      this.setState({ avatarSrc: reader.result });
    };
    this.setState({ isShowSubmitBtn: true });
  };

  handleDownloadSubmit = () => {};

  render() {
    return (
      <AvatarWrapper>
        {!this.props.account.avatarSrc ? (
          <Img src={this.props.account.avatarSrc} alt="AVATAR" />
        ) : (
          <EditForm onSubmit={this.handleDownloadSubmit}>
            <Label backgroundUrl={this.state.avatarSrc}>
              <Input
                type="file"
                accept=".jpg, .jpeg, .png"
                name="download avatar"
                onChange={this.handleDownloadAvatar}
                disabled={this.props.auth.isLogin}
              />
            </Label>

            {this.state.isShowSubmitBtn && (
              <Submit type="submit" name="submit avatar">
                заменить аватар
              </Submit>
            )}
          </EditForm>
        )}

        {this.props.auth.isLogin && (
          <EditButton
            type="button"
            name="edit-avatar"
            top="5px"
            onClick={this.handleEditAvatarClick}
          />
        )}
      </AvatarWrapper>
    );
  }
}

Avatar.propTypes = {
  account: PropTypes.shape({
    fullName: PropTypes.string,
    avatarSrc: PropTypes.string
  }),
  auth: PropTypes.shape({
    isLogin: PropTypes.bool
  })
};

Avatar.defaultProps = {
  account: {},
  auth: {}
};

export function mapStateToProps(state) {
  return {
    account: state.account,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  null
)(Avatar);
