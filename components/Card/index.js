import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  border-radius: 10px;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ small }) => (small ? '10px 10px 15px' : '20px 30px 30px')};
  background: ${({ background, theme }) =>
    background || theme.background.primary};
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  opacity: 0.88;
  transition: background 1500ms ease-in-out;
  will-change: background;
`;

const Card = ({
  background,
  center,
  children,
  height,
  maxWidth,
  width,
  small,
  ...props
}) => (
  <StyledCard
    center={center}
    background={background}
    small={small}
    height={height}
    width={width}
    maxWidth={maxWidth}
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
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  small: PropTypes.bool
};

Card.defaultProps = {
  center: false,
  small: false,
  width: '100%',
  maxWidth: '100%'
};

export default Card;
