import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: solid #7bbbee 1px;
  border-radius: 50%;
  background: url(${props =>
        props.backgroundUrl ? props.backgroundUrl : 'download.png'})
      center center no-repeat,
    #91b9dc;
  background-size: ${props => (props.backgroundUrl ? 'cover' : '50% 50%')};
  cursor: pointer;

  &:hover {
    background-color: #82b3dd;
  }
`;

Label.propTypes = {
  backgroundUrl: PropTypes.string
};

Label.defaultProps = {
  backgroundUrl: ''
};

export default Label;
