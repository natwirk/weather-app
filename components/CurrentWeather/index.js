import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import Card from '../Card';
import Icon from '../Icon';
import WindDirection from '../WindDirection';
import ForecastTypes from '../../types/forecast';

const StyledDescription = styled.p`
  font-size: 1.8rem;
  grid-column: 2;
  margin: 0;
`;

const StyledTemperature = styled.p`
  grid-column: 2;
  font-size: 3.6rem;
  font-weight: 700;
  margin: 1rem 0 0;
`;
const StyledIconWrapper = styled.div`
  grid-row: 1 / 3;
`;

const StyledData = styled.p`
  margin: 0;
  font-size: 1.6rem;
`;

const StyledDataHeading = styled.span`
  margin: 0 0 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  display: block;
  text-align: left;
`;

const StyledInfo = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: flex-start;
  width: 100%;
`;

const StyledAdditionalInfo = styled.dl`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  display: grid;
  grid-column-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const StyledAdditionalInfoDd = styled.dd`
  margin: 1rem 0 0;
`;

const StyledAdditionalInfoDt = styled.dt`
  text-align: center;
  margin: 1rem 0 0.2rem;
  font-weight: 700;
  grid-column: 1 / 4;
  text-align: left;
`;

const CurrentWeather = ({ conditions, humidity, temperature, wind }) => {
  return (
    <Card data-test="component-current-weather" width="100%">
      <StyledInfo>
        <StyledIconWrapper>
          {conditions?.icon ? (
            <Icon
              data-test="icon"
              color="#fff"
              width="120px"
              code={conditions.icon}
            />
          ) : (
            <Skeleton width="120px" height="100px" />
          )}
        </StyledIconWrapper>
        <StyledTemperature>
          {temperature?.main ? (
            <span data-test="temperature">{temperature.main}°C</span>
          ) : (
            <Skeleton width="50px" />
          )}
        </StyledTemperature>
        <StyledDescription data-test="description">
          {conditions?.description ? (
            <span>{conditions.description}</span>
          ) : (
            <Skeleton width="150px" />
          )}
        </StyledDescription>
        <StyledData>
          <StyledDataHeading>Wind:</StyledDataHeading>
          {wind?.speed && wind.speed + 'km/h'}
          {wind?.direction && (
            <WindDirection
              data-test="wind"
              deg={wind.direction}
              size="1.4rem"
            />
          )}
          {(!wind || !wind.speed || !wind.direction) && (
            <Skeleton width="80px" />
          )}
        </StyledData>
        <StyledData>
          <StyledDataHeading>Humidity:</StyledDataHeading>
          {humidity ? (
            <span data-test="humidity">{humidity} %</span>
          ) : (
            <Skeleton width="80px" />
          )}
        </StyledData>
      </StyledInfo>

      <StyledAdditionalInfo>
        <StyledAdditionalInfoDt>Temperature:</StyledAdditionalInfoDt>
        <StyledAdditionalInfoDd data-test="temperature-min">
          {temperature?.min ? (
            <span>Min: {temperature.min}°C</span>
          ) : (
            <Skeleton width="100%" />
          )}
        </StyledAdditionalInfoDd>
        <StyledAdditionalInfoDd data-test="temperature-max">
          {temperature?.max ? (
            <span>Max: {temperature.max}°C</span>
          ) : (
            <Skeleton width="100%" />
          )}
        </StyledAdditionalInfoDd>
        <StyledAdditionalInfoDd data-test="temperature-feels-like">
          {temperature?.feelsLike ? (
            <span>Feels like: {temperature.feelsLike}°C</span>
          ) : (
            <Skeleton width="100%" />
          )}
        </StyledAdditionalInfoDd>
      </StyledAdditionalInfo>
    </Card>
  );
};

CurrentWeather.propTypes = ForecastTypes;

export default CurrentWeather;
