import React from 'react';

import AuthWrapper from './AuthWrapper';
import AuthOverlay from './AuthOverlay';
import AuthForm from './AuthForm';
import AuthTitle from './AuthTitle';
import UserName from './AuthInput';
import Password from './AuthInput';
import SubmitButton from './SubmitButton';

export class Auth extends React.PureComponent {
  handleAuthSubmit = () => this.props.onClose();
  handleSubmitButtonClick = () => this.props.onClose();

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
          />
          <Password
            type="password"
            autoComplete="off"
            placeholder="пароль ..."
          />
          <SubmitButton
            type="submit"
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

export default Auth;
