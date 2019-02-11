import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditPhoneButton from 'components/EditButton';
import EditMailButton from 'components/EditButton';
import EditSkypeButton from 'components/EditButton';

import ContactsListWrapper from './ContactsListWrapper';
import ContactsList from './ContactsList';
import ContactsItem from './ContactsItem';
import ContactInput from './ContactInput';

export class Contacts extends React.PureComponent {
  state = {
    defaultPhoneValue: '+7(968)903-41-08',
    defaultMailValue: 'roboquasar@gmail.com',
    defaultSkypeValue: 'romansineok',
    isPhoneNotEditable: true,
    isMailNotEditable: true,
    isSkypeNotEditable: true
  };

  handleEditPhoneClick = () => {
    this.setState({ isPhoneNotEditable: false }, () => this.phone.focus());
  };

  handleEditMailClick = () => {
    this.setState({ isMailNotEditable: false }, () => this.mail.focus());
  };

  handleEditSkypeClick = () => {
    this.setState({ isSkypeNotEditable: false }, () => this.skype.focus());
  };

  handleInputBlur = e => {
    if (e.target.value === '') e.target.value = e.target.defaultValue;
    this.setState({
      isPhoneNotEditable: true,
      isMailNotEditable: true,
      isSkypeNotEditable: true
    });
  };

  render() {
    return (
      <ContactsListWrapper>
        <ContactsList>
          <ContactsItem
            imageUrl="phone.gif"
            borderRadius="10px"
            imageHeight="27px"
          >
            <ContactInput
              type="text"
              defaultValue={this.state.defaultPhoneValue}
              innerRef={p => {
                this.phone = p;
              }}
              name="phone-input"
              maxLength="30"
              disabled={this.state.isPhoneNotEditable}
              onBlur={this.handleInputBlur}
            />
          </ContactsItem>

          <ContactsItem
            imageUrl="gmail.png"
            borderRadius="4px"
            imageHeight="22px"
          >
            <ContactInput
              type="text"
              defaultValue={this.state.defaultMailValue}
              innerRef={m => {
                this.mail = m;
              }}
              name="mail-input"
              maxLength="30"
              disabled={this.state.isMailNotEditable}
              onBlur={this.handleInputBlur}
            />
          </ContactsItem>

          <ContactsItem
            imageUrl="skype.gif"
            borderRadius="10px"
            imageHeight="27px"
          >
            <ContactInput
              type="text"
              defaultValue={this.state.defaultSkypeValue}
              innerRef={s => {
                this.skype = s;
              }}
              name="skype-input"
              maxLength="30"
              disabled={this.state.isSkypeNotEditable}
              onBlur={this.handleInputBlur}
            />
          </ContactsItem>
        </ContactsList>

        {this.props.auth.get('isLogin') && (
          <React.Fragment>
            <EditPhoneButton
              type="button"
              name="edit-phone"
              top="5px"
              onClick={this.handleEditPhoneClick}
            />

            <EditMailButton
              type="button"
              name="edit-mail"
              top="40px"
              onClick={this.handleEditMailClick}
            />

            <EditSkypeButton
              type="button"
              name="edit-skype"
              top="84px"
              onClick={this.handleEditSkypeClick}
            />
          </React.Fragment>
        )}
      </ContactsListWrapper>
    );
  }
}

Contacts.propTypes = {
  auth: PropTypes.shape({
    isLogin: PropTypes.bool
  })
};

export function mapStateToProps(state) {
  return {
    auth: state.get('auth')
  };
}

export default connect(
  mapStateToProps,
  null
)(Contacts);
