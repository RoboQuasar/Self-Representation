import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditAvatarButton from 'components/EditButton';

import AvatarWrapper from './AvatarWrapper';
import EditAvatarForm from './EditAvatarForm';
import EditAvatarSubmit from './EditAvatarSubmit';
import Img from './Img';
import EditAvatarLabel from './EditAvatarLabel';
import EditAvatarInput from './EditAvatarInput';

export class Avatar extends React.PureComponent {
  state = {
    isEditableAvatar: false,
    isShowSubmitBtn: false,
    customAvatarSrc: false
  };

  handleEditAvatarClick = () => {
    this.setState({ isEditableAvatar: !this.state.isEditableAvatar });
  };

  handleDownloadAvatar = files => {
    this.setState({ isShowSubmitBtn: true });
  };

  handleDownloadSubmit = () => {
    this.setState({
      customAvatarSrc:
        'http://www.catster.com/wp-content/uploads/2017/09/A-tabby-cat-with-an-ID-collar-on.jpg'
    });
  };

  handleDownloadAvatarClick = () => {
    this.setState({
      customAvatarSrc:
        'http://www.catster.com/wp-content/uploads/2017/09/A-tabby-cat-with-an-ID-collar-on.jpg',
      isEditableAvatar: false
    });
  };

  render() {
    return (
      <AvatarWrapper>
        {!this.state.isEditableAvatar ? (
          <Img
            src={this.state.customAvatarSrc || this.props.avatarSrc}
            alt="SR AVATAR"
          />
        ) : (
          <EditAvatarForm onSubmit={this.handleDownloadSubmit}>
            <EditAvatarLabel>
              <EditAvatarInput
                type="file"
                accept=".jpg, .jpeg, .png"
                name="download avatar"
                onChange={this.handleDownloadAvatar}
                innerRef={a => {
                  this.avatar = a;
                }}
              />
            </EditAvatarLabel>

            {this.state.isShowSubmitBtn && (
              <EditAvatarSubmit
                type="button"
                name="submit avatar"
                onClick={this.handleDownloadAvatarClick}
              >
                заменить аватар
              </EditAvatarSubmit>
            )}
          </EditAvatarForm>
        )}

        {this.props.account && (
          <EditAvatarButton
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
  account: PropTypes.object
};

export function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export default connect(mapStateToProps, null)(Avatar);
