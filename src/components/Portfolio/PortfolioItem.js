import styled from 'styled-components';

const PortfolioItem = styled.figure`
  display: block;
  width: 30%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;

  & img {
    transition: transform 0.5s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export default PortfolioItem;
