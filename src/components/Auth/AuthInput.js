import styled from 'styled-components';

const AuthInput = styled.input`
  display: block;
  width: 70%;
  padding: 0 0 0 10px;
  margin: 10px auto 20px;
  font: normal 25px Helvetica;
  border: solid #91b9dc 1px;
  background: transparent;

  &::placeholder {
    font: normal 20px Helvetica;
    opacity: 0.8;
  }
`;

export default AuthInput;
