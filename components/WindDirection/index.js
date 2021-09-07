import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWindDirection = styled.span`
  display: inline-block;
  font-size: ${({ size }) => size || '2rem'};
  line-height: 1;
  transform: rotate(${({ deg }) => deg + 90}deg);
`;

const WindDirection = ({ deg, size }) => (
  <StyledWindDirection deg={deg} size={size}>
    &#10148;
  </StyledWindDirection>
);

WindDirection.propTypes = {
  deg: PropTypes.number,
  size: PropTypes.string
};

WindDirection.defaultProps = {
  deg: 0,
  size: '3rem'
};

export default WindDirection;
