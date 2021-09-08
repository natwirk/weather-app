import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { opacity } from '../../styles/keyframes';

const StyledFlipCard = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ theme }) => theme.color.primary};
  transition: height 200ms ease-in-out;
  position: relative;
  padding: 0;
  background: 0;
`;

const StyledFlipCardBase = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  will-change: transform;
  perspective: 1200px;
  border-radius: 10px;
  background: ${({ theme }) => theme.background.primary};
  transform: ${({ flip }) => (flip ? 'rotateY(-180deg)' : 'rotateY(0)')};
`;

const StyledFlipCardContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  padding: ${({ small }) => (small ? '10px 10px 15px' : '20px 30px 30px')};
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  opacity: 0;
  animation: ${opacity} 0.5s linear 0.5s forwards;
`;

const FlipCard = ({ center, children, height, small, width, ...props }) => {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <StyledFlipCard
      center={center}
      height={height}
      width={width}
      flip={flip}
      onClick={handleClick}
      {...props}
    >
      <StyledFlipCardBase flip={flip} />
      {!flip && (
        <StyledFlipCardContent center={center} small={small}>
          {children[0]}
        </StyledFlipCardContent>
      )}
      {flip && (
        <StyledFlipCardContent center={center} small={small}>
          {children[1]}
        </StyledFlipCardContent>
      )}
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
