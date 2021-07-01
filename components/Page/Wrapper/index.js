import styled from 'styled-components';

const defaultBackground =
  'linear-gradient(0deg, rgba(152,178,228,1) 0%, rgba(146,183,255,1) 100%)';

export const StyledPageWrapper = styled.div`
  background: ${({ background }) => background || defaultBackground};
  min-height: 100vh;
`;
