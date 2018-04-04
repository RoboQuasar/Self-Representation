import styled from 'styled-components';

const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  list-style-type: none;

  &:before {
    display: block;
    height: ${props => props.imageHeight};
    width: 27px;
    margin-right: 10px;
    content: '';
    border-radius: ${props => props.borderRadius};
    background: url(${props => props.imageUrl});
    background-position: center center;
  }
`;

export default ContactsItem;
