import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAccount } from 'actions';
import Alert from 'react-s-alert';
import { Map } from 'immutable';

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

  handleAvatarChange = e => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      this.setState({ avatarSrc: reader.result });
    };
    this.setState({ isShowSubmitBtn: true });
  };

  handleAvatarChangeSubmit = e => {
    e.preventDefault();
    this.props.setAccount(
      this.props.account.set('avatarSrc', this.state.avatarSrc)
    );

    Alert.success('Аватар успешно изменён');
  };

  render() {
    return (
      <AvatarWrapper>
        {this.props.auth.get('isLogin') ? (
          <EditForm onSubmit={this.handleAvatarChangeSubmit}>
            <Label backgroundUrl={this.state.avatarSrc}>
              <Input
                type="file"
                accept=".jpg, .jpeg, .png"
                name="download avatar"
                onChange={this.handleAvatarChange}
                disabled={!this.props.auth.get('isLogin')}
              />
            </Label>

            {this.state.isShowSubmitBtn && (
              <Submit type="submit" name="submit avatar">
                заменить аватар
              </Submit>
            )}
          </EditForm>
        ) : (
          <Img src={this.props.account.get('avatarSrc')} alt="AVATAR" />
        )}

        {this.props.auth.get('isLogin') && (
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
  account: PropTypes.instanceOf(Map),
  auth: PropTypes.instanceOf(Map)
};

Avatar.defaultProps = {
  account: new Map(),
  auth: new Map()
};

export function mapStateToProps(state) {
  return {
    account: state.get('account'),
    auth: state.get('auth')
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setAccount: account => dispatch(setAccount(account))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
