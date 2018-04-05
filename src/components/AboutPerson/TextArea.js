import styled from 'styled-components';

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
  background: #91b9dc;

  &:disabled {
    background: transparent;
  }
`;

export default TextArea;
