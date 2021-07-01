import Head from 'next/head';
import { StyledPageWrapper } from '../components/Page/Wrapper';

const Home = () => {
  return (
    <StyledPageWrapper>
      <Head>
        <title>Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Weather</h1>
        <p>Search...</p>
      </main>
      <footer />
    </StyledPageWrapper>
  );
};

export default Home;
