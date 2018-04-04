import React from 'react';

import ContactsList from './ContactsList';
import ContactsItem from './ContactsItem';
import ContactInput from './ContactInput';

export class Contacts extends React.PureComponent {
  render() {
    return (
      <ContactsList>
        <ContactsItem
          imageUrl="phone.gif"
          borderRadius="10px"
          imageHeight="27px"
        >
          <ContactInput
            type="text"
            value="+7(968)903-41-08"
            name="phone-input"
            maxLength="30"
          />
        </ContactsItem>
        <ContactsItem
          imageUrl="gmail.png"
          borderRadius="4px"
          imageHeight="22px"
        >
          <ContactInput
            type="text"
            value="roboquasar@gmail.com"
            name="mail-input"
            maxLength="30"
          />
        </ContactsItem>
        <ContactsItem
          imageUrl="skype.gif"
          borderRadius="10px"
          imageHeight="27px"
        >
          <ContactInput
            type="text"
            value="romansineok"
            name="skype-input"
            maxLength="30"
          />
        </ContactsItem>
      </ContactsList>
    );
  }
}

export default Contacts;
