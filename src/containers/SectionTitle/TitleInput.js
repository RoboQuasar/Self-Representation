import styled from 'styled-components';

const TitleInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0 0 10px;
  font-weight: bolder;
  font-size: 29px;
  font-family: 'Times New Roman';
  text-align: center;
  border: none;
  background: transparent;

  &:focus {
    background: #91b9dc;
    color: #000;
  }

  &:disabled {
    color: black;
  }
`;

export default TitleInput;
