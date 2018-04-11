import styled from 'styled-components';

const SkillItemFigure = styled.figure`
  position: relative;
  margin: 20px;

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
