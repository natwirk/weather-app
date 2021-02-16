import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

const GET_CURRENT_WEATHER = gql`
  query GetCurrentWeather($city: String!) {
    currentWeather(city: $city) {
      id
      airPollution {
        id
        pm2_5
        pm10
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_WEATHER, {
    variables: {
      city: 'Rome'
    }
  });

  console.log(data);

  return (
    <div>
      <Head>
        <title>Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Weather</h1>
      </main>
      <footer />
    </div>
  );
};

export default Home;
