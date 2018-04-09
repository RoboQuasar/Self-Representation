import styled from 'styled-components';

const AddSkillButton = styled.button`
  position: relative;
  width: 70px;
  height: 70px;
  margin: 0;
  padding: 0;
  border: solid #cedfec 1px;
  border-radius: 50%;
  background: url(add_skill.png) no-repeat center center, white;
  background-size: 55% 55%;
  cursor: pointer;
  transition: trransform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default AddSkillButton;
