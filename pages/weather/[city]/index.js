import Head from 'next/head';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import AirQuality from '../../../components/AirQuality';
import ForecastCards from '../../../components/ForecastCards';
import { StyledPageWrapper } from '../../../components/Page/Wrapper';
import { StyledHeading } from '../../../components/Typography';

const GET_CURRENT_WEATHER = gql`
  query GetCurrentWeather($city: String!) {
    currentWeather(city: $city) {
      id
      airPollution {
        id
        pm2_5
        pm10
        qualityIndex
      }
      location {
        city
        country
        sunset
        sunrise
      }
      conditions {
        name
        icon
        description
      }
      humidity
      time
      date
      temperature {
        min
        max
        main
        feelsLike
      }
      wind {
        speed
        direction
      }
    }
    futureWeather(city: "Kraków") {
      id
      forecast {
        id
        date
        time
        conditions {
          name
          description
          icon
        }
        humidity
        temperature {
          feelsLike
          min
          max
          main
        }
        wind {
          direction
          speed
        }
      }
      location {
        city
        country
        sunrise
        sunset
      }
    }
  }
`;

const prepareTitle = text => {
  const decodedText = decodeURI(text);
  return decodedText[0].toUpperCase() + decodedText.slice(1);
};

const Weather = () => {
  const router = useRouter();
  const { city } = router.query;

  const { loading, error, data } = useQuery(GET_CURRENT_WEATHER, {
    variables: {
      city: city
    }
  });

  return (
    <StyledPageWrapper>
      <Head>
        <title>Another Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Another Weather App</h1>
      </header>
      <main>
        <StyledHeading>{prepareTitle(city)}</StyledHeading>
        <AirQuality {...data?.currentWeather?.airPollution} />
        <ForecastCards forecast={data?.futureWeather?.forecast} />
      </main>
      <footer>Another Weather App</footer>
    </StyledPageWrapper>
  );
};

export default Weather;
