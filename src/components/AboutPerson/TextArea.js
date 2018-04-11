import styled from 'styled-components';
import { COLORS } from 'styles';

const TextArea = styled.textarea`
  height: 210px; /* min-height: 160px; */
  width: 100%;
  padding: 0 2%;
  margin: 0;
  border: none;
  border-radius: 18px;
  resize: none;
  font: 400 20px 'Times New Roman';
  text-align: center;
  background: ${COLORS.morningGlory};

  &:disabled {
    color: #000;
    background: transparent;
  }
`;

export default TextArea;
