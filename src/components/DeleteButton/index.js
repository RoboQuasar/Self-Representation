import styled from 'styled-components';

const DeleteButton = styled.button`
  position: absolute;
  right: ${props => (props.right ? props.right : '0')};
  top: ${props => props.top};
  width: 23px;
  height: 23px;
  margin: 0;
  border: solid #cedfec 1px;
  border-radius: 5px;
  background: url(delete.png) no-repeat center center, white;
  background-size: 72% 72%;
  cursor: pointer;
  transition: trransform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default DeleteButton;
