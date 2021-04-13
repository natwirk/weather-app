import { keyframes } from 'styled-components';

export const dashOffsetKeyframe = offset => keyframes`
  0% {
    stroke-dashoffset: ${offset}px;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;
