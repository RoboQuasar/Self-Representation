import styled from 'styled-components';

const DeleteButton = styled.button`
  position: absolute;
  right: ${props => (props.right ? props.right : '0')};
  top: ${props => props.top};
  width: 23px;
  height: 23px;
  padding: 5px;
  margin: 0;
  border: none;
  border-radius: 50%;
  background: url(delete.png) no-repeat center center, white;
  background-size: 70% 70%;
  cursor: pointer;
  transition: trransform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default DeleteButton;
