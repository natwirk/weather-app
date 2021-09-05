import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Wrapper from '../Wrapper';

const StyledHeader = styled.header`
  padding: 1.5rem 0;
  background: ${({ theme }) => theme.background.primary};
  transition: background 300ms ease-in-out 1000ms;
`;

const StyledHeading = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
`;

const Header = ({ subtitle, title, withSubtitle }) => (
  <StyledHeader>
    <Wrapper>
      <StyledHeading>
        <Link href="/">{title}</Link> {withSubtitle && '– '}
        <SwitchTransition>
          <CSSTransition
            key={withSubtitle && subtitle ? 'loaded' : 'loading'}
            classNames="fade"
            timeout={500}
          >
            <span>
              {subtitle || (withSubtitle ? <Skeleton width={100} /> : '')}
            </span>
          </CSSTransition>
        </SwitchTransition>
      </StyledHeading>
    </Wrapper>
  </StyledHeader>
);

Header.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  withSubtitle: PropTypes.bool
};

Header.defaultProps = {
  withSubtitle: false
};

export default Header;
