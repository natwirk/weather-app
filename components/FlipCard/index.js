import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

export const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledFlipCard = styled.div`
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ small }) => (small ? '10px 10px 15px' : '20px 30px 30px')};
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  color: rgba(255, 255, 255, 0.9);
  transition: height 200ms ease-in-out;
  will-change: transform;
  perspective: 1000px;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${({ flip }) => (flip ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const StyledFlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${({ flip }) => (flip ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const StyledFlipCardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  opacity: 0;
  animation: ${opacity} 0.5s linear 0.5s forwards;
`;

const FlipCard = ({ center, children, height, small, width, ...props }) => {
  const [flip, setFlip] = useState(false);

  const onMouseOver = () => {
    if (!flip) {
      setFlip(true);
    }
  };

  const onMouseLeave = () => {
    if (flip) {
      setFlip(false);
    }
  };

  return (
    <StyledFlipCard
      center={center}
      small={small}
      height={height}
      width={width}
      flip={flip}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
      onMouseLeave={onMouseLeave}
      onBlur={onMouseLeave}
      {...props}
    >
      <StyledFlipCardInner flip={flip}>
        {!flip && (
          <StyledFlipCardContent center={center}>
            {children[0]}
          </StyledFlipCardContent>
        )}
        {flip && (
          <StyledFlipCardContent center={center}>
            {children[1]}
          </StyledFlipCardContent>
        )}
      </StyledFlipCardInner>
    </StyledFlipCard>
  );
};

FlipCard.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
  small: PropTypes.bool
};

FlipCard.defaultProps = {
  center: false,
  small: false,
  width: '200px',
  height: '200px'
};

export default FlipCard;
