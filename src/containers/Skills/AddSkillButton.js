import styled from 'styled-components';

const AddSkillButton = styled.button`
  position: relative;
  width: 70px;
  height: 70px;
  margin: 0 0 0 10px;
  padding: 0;
  border: solid #cedfec 1px;
  border-radius: 50%;
  background: url(add_skill.png) no-repeat center center, white;
  background-size: 55% 55%;
  cursor: pointer;
  ${props => props.rotated && 'transform: rotate(45deg)'};
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.1) ${props => props.rotated && 'rotate(45deg)'};
  }

  &:focus {
    outline-width: 0;
  }
`;

export default AddSkillButton;
