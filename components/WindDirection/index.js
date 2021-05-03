import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWindDirection = styled.span`
  display: inline-block;
  color: ${({ color }) => color || '#fff'};
  font-size: ${({ size }) => size || '2rem'};
  transform: rotate(${({ deg }) => deg + 90}deg);
`;

const WindDirection = ({ color, deg, size }) => (
  <StyledWindDirection color={color} deg={deg} size={size}>
    &#10148;
  </StyledWindDirection>
);

WindDirection.propTypes = {
  color: PropTypes.string,
  deg: PropTypes.number,
  size: PropTypes.string
};

WindDirection.defaultProps = {
  color: '#fff',
  deg: 0,
  size: '3rem'
};

export default WindDirection;
