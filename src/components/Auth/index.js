import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAccount } from 'actions';

import AuthWrapper from './AuthWrapper';
import AuthOverlay from './AuthOverlay';
import AuthForm from './AuthForm';
import AuthTitle from './AuthTitle';
import UserName from './AuthInput';
import Password from './AuthInput';
import SubmitButton from './SubmitButton';

export class Auth extends React.PureComponent {
  handleAuthSubmit = () => {
    this.props.setAccount(this.account);
    this.props.onClose();
  };

  handleSubmitButtonClick = () => {
    this.props.setAccount(this.account);
    this.props.onClose();
  };

  get account() {
    return {
      account: {
        username: this.username.value,
        password: this.password.value
      }
    };
  }

  render() {
    return (
      <AuthWrapper>
        <AuthOverlay />
        <AuthForm onSubmit={this.handleAuthSubmit}>
          <AuthTitle>Введите имя пользователя и пароль</AuthTitle>
          <UserName
            type="text"
            autoComplete="off"
            placeholder="имя пользователя ..."
            innerRef={u => (this.username = u)}
          />
          <Password
            type="password"
            autoComplete="off"
            placeholder="пароль ..."
            innerRef={p => (this.password = p)}
          />
          <SubmitButton
            type="button"
            name="submit-auth"
            onClick={this.handleSubmitButtonClick}
          >
            войти
          </SubmitButton>
        </AuthForm>
      </AuthWrapper>
    );
  }
}

Auth.propTypes = {
  setAccount: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    setAccount: account => dispatch(setAccount(account))
  };
}

export default connect(null, mapDispatchToProps)(Auth);
