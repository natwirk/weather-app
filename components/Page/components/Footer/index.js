import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.background.primary};
  transition: background 1500ms ease-in-out 1000ms;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
`;

const Footer = ({ children }) => (
  <StyledFooter>
    <Wrapper>{children}</Wrapper>
  </StyledFooter>
);

Footer.propTypes = {
  children: PropTypes.element
};

export default Footer;
