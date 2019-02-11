import styled from 'styled-components';
import { COLORS } from 'styles';

const TitleInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0 0 10px;
  ${props =>
    props.isSubtitle
      ? `font-weight: 500;
       font-size: 22px;`
      : `font-weight: bolder;
       font-size: 29px;`} font-family: 'Times New Roman';
  text-align: center;
  border: none;
  background: transparent;

  &:focus {
    background: ${COLORS.morningGlory};
    color: #000;
  }

  &:disabled {
    color: black;
  }
`;

export default TitleInput;
