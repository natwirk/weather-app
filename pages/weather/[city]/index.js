import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { breakpoints } from '../../../styles/breakpoints';
import AirQuality from '../../../components/AirQuality';
import CurrentWeather from '../../../components/CurrentWeather';
import ForecastCards from '../../../components/ForecastCards';
import CityInfo from '../../../components/CityInfo';
import Page from '../../../components/Page';
import backgroundHelper from '../../../helpers/background';

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
      coordinates {
        latitude
        longitude
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
    futureWeather(city: $city) {
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
    }
  }
`;

const prepareTitle = text => {
  if (text) {
    const decodedText = decodeURI(text);
    return decodedText[0].toUpperCase() + decodedText.slice(1);
  }
};

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 100%;
  padding: 40px 0 80px;
  grid-template-areas:
    'city-info'
    'current-weather'
    'future-weather'
    'air-quality';
  @media ${breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'city-info current-weather'
      'air-quality current-weather'
      'future-weather future-weather';
  }
  @media ${breakpoints.md} {
    grid-template-columns: 2fr 3fr 2fr;
    grid-template-areas:
      'city-info current-weather air-quality'
      'future-weather future-weather future-weather';
  }
`;

const StyledColumn = styled.div`
  grid-area: ${({ area }) => area};
`;

const StyledButton = styled.button`
  width: 100px;
  background: ${({ theme }) => theme.background.button};
  color: ${({ theme }) => theme.color.primary};
  border: 0;
  outline: 0;
  border-radius: 4px;
  padding: 1.5rem 2rem;
  border: 2px solid ${({ theme }) => theme.color.primary};
  cursor: pointer;
  font-size: 2.2rem;
  &:hover {
    background: ${({ theme }) => theme.background.buttonHover};
  }
`;

const StyledError = styled.p`
  text-align: center;
  font-size: 3.6rem;
`;

const StyledErrorWrapper = styled.div`
  display: flex;
  max-width: 500px;
  margin: 5rem auto;
  flex-direction: column;
  align-items: center;
`;

const Weather = ({ changeTheme }) => {
  const router = useRouter();
  const { city } = router.query;
  const result = useQuery(GET_CURRENT_WEATHER, {
    skip: !city,
    variables: {
      city: city
    }
  });
  const { data, error, loading } = result;
  const title = prepareTitle(city);

  useEffect(() => {
    const icon = data?.currentWeather?.conditions?.icon;
    if (icon) {
      changeTheme(backgroundHelper(icon));
    }
  }, [data]);

  const onBackClick = () => {
    router.push('/');
  };

  return (
    <Page subtitle={title} withSubtitle={true}>
      <div>
        {!error && (data || loading) && (
          <StyledWrapper>
            <StyledColumn area="city-info">
              <CityInfo
                country={data?.currentWeather.location.country}
                latitude={data?.currentWeather.coordinates.latitude}
                longitude={data?.currentWeather.coordinates.longitude}
                name={data?.currentWeather.location.city}
                sunrise={data?.currentWeather.location.sunrise}
                sunset={data?.currentWeather.location.sunset}
                time={data?.currentWeather.time}
              />
            </StyledColumn>
            <StyledColumn area="current-weather">
              <CurrentWeather
                conditions={data?.currentWeather.conditions}
                humidity={data?.currentWeather.humidity}
                temperature={data?.currentWeather.temperature}
                wind={data?.currentWeather.wind}
              />
            </StyledColumn>
            <StyledColumn area="air-quality">
              <AirQuality {...data?.currentWeather?.airPollution} />
            </StyledColumn>
            <StyledColumn area="future-weather">
              <ForecastCards forecast={data?.futureWeather?.forecast} />
            </StyledColumn>
          </StyledWrapper>
        )}
        {error && (
          <StyledErrorWrapper>
            <StyledError>City not found.</StyledError>
            <StyledButton onClick={onBackClick}>Back</StyledButton>
          </StyledErrorWrapper>
        )}
      </div>
    </Page>
  );
};

Weather.propTypes = {
  changeTheme: PropTypes.func.isRequired
};

export default Weather;
