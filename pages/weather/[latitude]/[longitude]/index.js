import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { breakpoints } from '../../../../styles/breakpoints';
import AirQuality from '../../../../components/AirQuality';
import CurrentWeather from '../../../../components/CurrentWeather';
import ForecastCards from '../../../../components/ForecastCards';
import CityInfo from '../../../../components/CityInfo';
import Page from '../../../../components/Page';
import backgroundHelper from '../../../../helpers/background';

const GET_CURRENT_WEATHER = gql`
  query GetCurrentWeather($latitude: String!, $longitude: String!) {
    currentWeather(latitude: $latitude, longitude: $longitude) {
      id
      airQuality {
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
    futureWeather(latitude: $latitude, longitude: $longitude) {
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

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 100%;
  padding: 40px 0 0;
  grid-template-areas:
    'back-top'
    'city-info'
    'current-weather'
    'future-weather'
    'air-quality'
    'back-bottom';
  @media ${breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'back-top back-top'
      'city-info current-weather'
      'air-quality current-weather'
      'future-weather future-weather';
  }
  @media ${breakpoints.lg} {
    grid-template-columns: 2fr 3fr 2fr;
    grid-template-areas:
      'back-top back-top back-top'
      'city-info current-weather air-quality'
      'future-weather future-weather future-weather';
  }
`;

const StyledColumn = styled.div`
  grid-area: ${({ area }) => area};
  max-width: 100%;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.background.button};
  color: ${({ theme }) => theme.color.primary};
  outline: 0;
  border-radius: 4px;
  padding: 1.5rem 2rem;
  border: ${({ border, theme }) =>
    border ? `2px solid ${theme.color.primary}` : '0'};
  cursor: pointer;
  font-size: 2.2rem;
  white-space: nowrap;
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
  const { latitude, longitude } = router.query;
  const result = useQuery(GET_CURRENT_WEATHER, {
    skip: !latitude || !longitude,
    variables: {
      latitude: latitude,
      longitude: longitude
    }
  });
  const { data, error, loading } = result;

  useEffect(() => {
    const icon = data?.currentWeather?.conditions?.icon;
    if (icon) {
      changeTheme(backgroundHelper(icon));
    }
  }, [changeTheme, data]);

  const onBackClick = () => {
    router.push('/');
  };

  return (
    <Page subtitle={data?.currentWeather?.location?.city} withSubtitle={true}>
      <>
        {!error && (data || loading) && (
          <StyledWrapper>
            <StyledColumn area="back-top">
              <StyledButton type="button" onClick={onBackClick}>
                &#8592; Back
              </StyledButton>
            </StyledColumn>
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
              <AirQuality
                pm2_5={data?.currentWeather?.airQuality?.pm2_5}
                pm10={data?.currentWeather?.airQuality?.pm10}
                qualityIndex={data?.currentWeather?.airQuality.qualityIndex}
              />
            </StyledColumn>
            <StyledColumn area="future-weather">
              <ForecastCards forecast={data?.futureWeather?.forecast} />
            </StyledColumn>
          </StyledWrapper>
        )}
        {error && (
          <StyledErrorWrapper>
            <StyledError>City not found.</StyledError>
            <StyledButton border={true} onClick={onBackClick}>
              Back
            </StyledButton>
          </StyledErrorWrapper>
        )}
      </>
    </Page>
  );
};

Weather.propTypes = {
  changeTheme: PropTypes.func.isRequired
};

export default Weather;
