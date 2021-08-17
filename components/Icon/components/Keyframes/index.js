import { keyframes } from 'styled-components';

export const dashOffsetKeyframe = offset => keyframes`
  0% {
    stroke-dashoffset: ${offset}px;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
