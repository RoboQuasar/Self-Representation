import styled from 'styled-components';

const SkillItemFigure = styled.figure`
  position: relative;
  padding: 10px;
  margin: 0;

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
