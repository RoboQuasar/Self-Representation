import styled from 'styled-components';

const EditAvatarLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: solid #7bbbee 1px;
  border-radius: 50%;
  background: url(download.png) center center no-repeat, #91b9dc;
  background-size: 50% 50%;
  cursor: pointer;

  &:hover {
    background: url(download.png) center center no-repeat, #82b3dd;
    background-size: 50% 50%;
  }
`;

export default EditAvatarLabel;
