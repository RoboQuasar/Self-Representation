import styled from 'styled-components';

import SkillItemFigure from './SkillItemFigure';

const SkillsItemWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  &:last-of-type ${SkillItemFigure} {
    padding: 0;
  }
`;

export default SkillsItemWrapper;
