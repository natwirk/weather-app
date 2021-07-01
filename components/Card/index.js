import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ small }) => (small ? '10px 10px 15px' : '20px 30px 30px')};
  background: ${({ background, theme }) =>
    background || theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  opacity: 0.88;
`;

const Card = ({
  background,
  center,
  children,
  small,
  height,
  width,
  ...props
}) => (
  <StyledCard
    center={center}
    background={background}
    small={small}
    height={height}
    width={width}
    {...props}
  >
    {children}
  </StyledCard>
);

Card.propTypes = {
  background: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
  small: PropTypes.bool
};

Card.defaultProps = {
  background: 'rgba(255, 255, 255, 0.3)',
  center: false,
  small: false,
  width: '400px',
  height: '200px'
};

export default Card;
