import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAccount, login } from 'actions';

import AuthWrapper from './AuthWrapper';
import AuthOverlay from './AuthOverlay';
import AuthForm from './AuthForm';
import AuthTitle from './AuthTitle';
import UserName from './AuthInput';
import SurName from './AuthInput';
import SubmitButton from './SubmitButton';

export class Auth extends React.PureComponent {
  state = {
    firstName: '',
    surName: ''
  };

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleSurNameChange = e => {
    this.setState({ surName: e.target.value });
  };

  handleAuthSubmit = e => {
    e.preventDefault();

    this.props.setAccount(this.account);
    this.props.login();
    this.props.onClose();
  };

  get account() {
    return {
      ...this.props.account,
      fullName: `${this.state.firstName} ${this.state.surName}`
    };
  }

  render() {
    return (
      <AuthWrapper>
        <AuthOverlay onClick={this.props.onClose} />

        <AuthForm onSubmit={this.handleAuthSubmit}>
          <AuthTitle>Введите имя и фамилию</AuthTitle>

          <UserName
            type="text"
            autoComplete="off"
            value={this.state.firstName}
            placeholder="Введите имя ..."
            required
            onChange={this.handleFirstNameChange}
          />
          <SurName
            type="text"
            autoComplete="off"
            value={this.state.surName}
            placeholder="Введите фамилию ..."
            required
            onChange={this.handleSurNameChange}
          />
          <SubmitButton type="submit" name="submit-auth">
            войти
          </SubmitButton>
        </AuthForm>
      </AuthWrapper>
    );
  }
}

Auth.propTypes = {
  setAccount: PropTypes.func,
  login: PropTypes.func,
  account: PropTypes.shape({
    fullName: PropTypes.string,
    avatarSrc: PropTypes.string
  })
};

export function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setAccount: account => dispatch(setAccount(account)),
    login: () => dispatch(login())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Auth);
