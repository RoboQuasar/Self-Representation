import styled from 'styled-components';

const SkillsWrapper = styled.section`
  ${props =>
    props.absoluted
      ? `position: absolute;
       top: 10px;
       right: 3%;
       width: 56.4%;`
      : `position: relative;
       width: 60%;`};
  z-index: 10;
  padding: 15px 25px;
  background-color: #fff;
`;

export default SkillsWrapper;
