import styled from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const defaultBackground = 'rgba(152, 178, 228, 1)';

const StyledPage = styled.div`
  background: ${({ theme }) => theme?.background?.page || defaultBackground};
  transition: background 2000ms ease-in-out;
  will-change: background;
  min-height: 100vh;
  position: relative;
`;

const Page = ({ children, subtitle, withSubtitle }) => (
  <StyledPage>
    <Head>
      <title>Another Weather App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header
      title="Another Weather App"
      subtitle={subtitle}
      withSubtitle={withSubtitle}
    />
    <Main>{children}</Main>
    <Footer>
      <span>Another Weather App</span>
    </Footer>
  </StyledPage>
);
Page.propTypes = {
  children: PropTypes.element,
  subtitle: PropTypes.string,
  withSubtitle: PropTypes.bool
};

export default Page;
