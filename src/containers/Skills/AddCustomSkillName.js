import styled from 'styled-components';

const AddCustomSkillName = styled.input`
  display: block;
  width: 40%;
  margin-right: 20px;
  padding: 0 0 0 10px;
  font: normal 25px Helvetica;
  border: solid #91b9dc 1px;
  border-radius: 8px;
  background: transparent;

  &::placeholder {
    font: normal 20px Helvetica;
    opacity: 0.8;
  }
`;

export default AddCustomSkillName;
