import styled from 'styled-components';
import { COLORS } from 'styles';

const FooterLink = styled.a`
  display: block;
  height: 35px;
  width: 35px;
  margin-left: 20px;
  text-decoration: none;
  border-radius: 50%;
  background: url(${props => props.imageSrc}) center center no-repeat,
    ${COLORS.astral};
  background-size: contain;
`;

export default FooterLink;
