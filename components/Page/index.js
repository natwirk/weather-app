import styled from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const defaultBackground =
  'linear-gradient(0deg, rgba(152,178,228,1) 0%, rgba(146,183,255,1) 100%)';

const StyledPage = styled.div`
  background: ${({ background }) => background || defaultBackground};
  min-height: 100vh;
  position: relative;
`;

const Page = ({ children, subtitle, withSubtitle }) => {
  return (
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
};

Page.propTypes = {
  children: PropTypes.element,
  subtitle: PropTypes.string,
  withSubtitle: PropTypes.bool
};

export default Page;
