import styled from 'styled-components';
import { COLORS } from 'styles';

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  max-height: 200px;
  padding: 0 10%;
  background: ${COLORS.astral};
`;

export default HeaderWrapper;
