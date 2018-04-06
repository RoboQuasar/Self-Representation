import styled from 'styled-components';

const NavigationItem = styled.a`
  display: none;
  margin-left: 4px;
  padding: 10px 15px;
  border-radius: 4px;
  border: solid transparent 1px;
  background-color: #77acd9;
  font-family: Helvetica;
  font-size: 11px;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: #285f8f;
    border: solid #7bbbee 1px;
  }
`;

export default NavigationItem;
