import styled from 'styled-components';

export const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  font-size: 3.2rem;
  margin: 0 0 2rem;
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
`;
