import styled from 'styled-components';

const EditIconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 5px;
  width: 23px;
  height: 23px;
  padding: 3px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default EditIconWrapper;
