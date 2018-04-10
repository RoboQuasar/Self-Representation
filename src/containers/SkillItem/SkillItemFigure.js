import styled from 'styled-components';

const SkillItemFigure = styled.figure`
  position: relative;

  ${props =>
    props.clickable &&
    `
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  `};
`;

export default SkillItemFigure;
