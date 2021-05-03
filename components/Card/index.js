import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ small }) => (small ? '10px 10px 15px' : '20px 30px 30px')};
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
`;

const Card = ({ center, children, small, height, width, ...props }) => (
  <StyledCard
    center={center}
    small={small}
    height={height}
    width={width}
    {...props}
  >
    {children}
  </StyledCard>
);

Card.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  width: PropTypes.string,
  small: PropTypes.bool
};

Card.defaultProps = {
  center: false,
  small: false,
  width: '400px'
};

export default Card;
