import styled from 'styled-components';
import { opacity } from '../../styles/keyframes';

export const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  text-align: ${({ align }) => align || 'center'};
  font-size: 4.8rem;
  margin: 0 0 2rem;
`;

export const StyledTitle = styled.h3`
  color: ${({ color, theme }) => theme.color[color] || theme.color.primary};
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  transition: color 200ms ease-in-out;
`;

export const AnimatedText = styled.span`
  opacity: 0;
  animation: ${opacity} 0.5s linear 1s forwards;
`;
