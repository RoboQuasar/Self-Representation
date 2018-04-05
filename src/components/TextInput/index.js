import styled from 'styled-components';

const TextInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  font: bolder 30px sans-serif;
  color: #fff;
  border: none;
  background: transparent;

  &:focus {
    background: #91b9dc;
    color: #000;
  }
`;

export default TextInput;
