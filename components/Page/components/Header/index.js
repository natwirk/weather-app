import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Wrapper from '../Wrapper';

const StyledHeader = styled.header`
  color: ${({ theme }) => theme.color.primary};
  padding: 1.5rem 0;
  background: ${({ theme }) => theme.background.primary};
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
        {title} {withSubtitle && '– '}
        <SwitchTransition>
          <CSSTransition
            key={withSubtitle && subtitle ? 'loaded' : 'loading'}
            classNames="fade"
            timeout={500}
          >
            <span>
              {withSubtitle && subtitle ? subtitle : <Skeleton width={100} />}
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
