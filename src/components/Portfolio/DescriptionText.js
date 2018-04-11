import styled from 'styled-components';
import { COLORS } from 'styles';

const DescriptionText = styled.textarea`
  width: 100%;
  min-height: 100px;
  height: ${props =>
    props.descriptionHeight ? props.descriptionHeight : 'auto'};
  padding: 0 2%;
  margin: 0 0 2%;
  font: 400 17px 'Times New Roman';
  line-height: 1.2;
  text-align: center;
  border: none;
  border-radius: 18px;
  background: ${COLORS.morningGlory};
  resize: none;

  &:disabled {
    color: #000;
    background: transparent;
  }
`;

export default DescriptionText;
