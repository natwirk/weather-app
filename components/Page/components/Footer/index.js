import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import { breakpoints } from '../../../../styles/breakpoints';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.background.primary};
  transition: background 1500ms ease-in-out 1000ms;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
`;
const StyledFooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media ${breakpoints.sm} {
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
  }
  a {
    text-decoration: underline;
    font-weight: 700;
  }
`;

const Footer = ({ children }) => (
  <StyledFooter>
    <Wrapper>
      <StyledFooterContent>{children}</StyledFooterContent>
    </Wrapper>
  </StyledFooter>
);

Footer.propTypes = {
  children: PropTypes.element
};

export default Footer;
