import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';

const StyledMain = styled.main`
  color: ${({ theme }) => theme.color.primary};
`;

const Main = ({ children }) => (
  <StyledMain>
    <Wrapper>{children}</Wrapper>
  </StyledMain>
);

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
