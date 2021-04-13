import styled from 'styled-components';
import { dashOffsetKeyframe } from '../Keyframes';

const StyledCircle = styled.circle`
  stroke-dashoffset: ${({ dashOffset }) => dashOffset || 100}px;
  stroke-dasharray: ${({ dashArray }) => dashArray || 100}px;
  stroke-width: 3px;
  stroke: ${({ color }) => color || '#fff'};
  stroke-linecap: round;
  fill: transparent;
  animation: ${({ dashOffset }) => dashOffsetKeyframe(dashOffset || 100)}
    ${({ duration }) => duration || '0.5s'}
    ${({ timing }) => timing || 'ease-in-out'} ${({ delay }) => delay || '0s'}
    forwards;
`;

const StyledLine = styled.line`
  stroke-dashoffset: ${({ dashOffset }) => dashOffset || 100}px;
  stroke-dasharray: ${({ dashArray }) => dashArray || 100}px;
  stroke-linecap: round;
  stroke-width: 3;
  stroke: ${({ color }) => color || '#fff'};
  animation: ${({ dashOffset }) => dashOffsetKeyframe(dashOffset || 100)}
    ${({ duration }) => duration || '0.5s'}
    ${({ timing }) => timing || 'ease-in-out'} ${({ delay }) => delay || '0s'}
    forwards;
`;

const StyledPath = styled.path`
  fill: none;
  stroke-width: 3px;
  stroke-dashoffset: ${({ dashOffset }) => dashOffset || 100}px;
  stroke-dasharray: ${({ dashArray }) => dashArray || 100}px;
  stroke: ${({ color }) => color || '#fff'};
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: ${({ dashOffset }) => dashOffsetKeyframe(dashOffset || 100)}
    ${({ duration }) => duration || '0.5s'}
    ${({ timing }) => timing || 'ease-in-out'} ${({ delay }) => delay || '0s'}
    forwards;
`;

export { StyledCircle, StyledLine, StyledPath };
