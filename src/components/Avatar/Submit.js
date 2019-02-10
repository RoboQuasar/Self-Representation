import styled from 'styled-components';
import { COLORS } from 'styles';

const Submit = styled.button`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 150px;
  padding: 10px 15px;
  margin: 10px auto 0;
  font: bolder 11px Helvetica;
  text-transform: uppercase;
  border: solid transparent 1px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: ${COLORS.periwinkleGray};
    border: solid #7bbbee 1px;
  }
`;

export default Submit;
