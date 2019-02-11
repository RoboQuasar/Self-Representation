import styled from 'styled-components';

const EditButton = styled.button`
  position: absolute;
  right: ${props => (props.right ? props.right : '0')};
  top: ${props => props.top};
  width: 23px;
  height: 23px;
  padding: 5px;
  margin: 0;
  border: none;
  border-radius: 50%;
  background: url(pencil.png) no-repeat center center,
    ${props => (props.backgroundColor ? props.backgroundColor : 'white')};
  background-size: 70% 70%;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default EditButton;
