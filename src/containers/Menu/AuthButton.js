import styled from 'styled-components';

const AuthButton = styled.button`
  padding: 10px 15px;
  margin: 10px auto 0;
  font: normal 11px Helvetica;
  text-transform: uppercase;
  color: #fff;
  border: solid transparent 1px;
  border-radius: 4px;
  background-color: #8eb5da;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: #285f8f;
    border: solid #7bbbee 1px;
  }
`;

export default AuthButton;
