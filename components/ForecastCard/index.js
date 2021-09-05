import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import FlipCard from '../FlipCard';
import Icon from '../Icon';
import WindDirection from '../WindDirection';
import ForecastTypes from '../../types/forecast';

const StyledForecastCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.88;
  margin: 0 1rem;
`;

const StyledDescription = styled.span`
  margin: 1rem 0 0;
`;

const StyledHeading = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  margin: 0 0 0.5rem;
  font-weight: 400;
`;
const StyledInnerHeading = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`;

const StyledTemperature = styled.p`
  margin: 1rem 0 0;
  font-size: 2.4rem;
  font-weight: 700;
`;

const StyledWind = styled.p`
  margin: 0;
`;
const StyledWindHeading = styled.span`
  margin: 1rem 0 0;
  font-weight: 700;
  display: block;
  text-align: center;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAdditionalInfo = styled.dl`
  margin: 0;
  padding: 0;
`;

const StyledAdditionalInfoDd = styled.dd`
  margin: 0 0 1rem;
`;

const StyledAdditionalInfoDt = styled.dt`
  text-align: center;
  margin: 1rem 0;
  font-weight: 700;
`;

const ForecastCard = ({
  conditions,
  date,
  humidity,
  temperature,
  time,
  wind
}) => {
  const isDataMissing = !conditions || !temperature;

  return (
    <StyledForecastCard data-test="component-forecast-card">
      <StyledHeading>
        <StyledInnerHeading data-test="date">
          {date ? date : <Skeleton width={50} />}
        </StyledInnerHeading>
        <StyledInnerHeading data-test="time">
          {time ? time : <Skeleton width={50} />}
        </StyledInnerHeading>
      </StyledHeading>
      {!isDataMissing ? (
        <FlipCard
          center={true}
          width="180px"
          height="240px"
          small={true}
          data-test="card"
        >
          <StyledInfo>
            <Icon data-test="icon" width="80px" code={conditions.icon} />
            <StyledDescription data-test="description">
              {conditions.description}
            </StyledDescription>
            <StyledTemperature>
              <span data-test="temperature">{temperature.main}</span>
              <span>°C</span>
            </StyledTemperature>
            <StyledWind data-test="wind">
              <StyledWindHeading>Wind:</StyledWindHeading>
              {wind.speed}km/h
              <WindDirection deg={wind.direction} size="2rem" />
            </StyledWind>
          </StyledInfo>
          <StyledAdditionalInfo data-test="additional-information">
            <StyledAdditionalInfoDt>Humidity:</StyledAdditionalInfoDt>
            <StyledAdditionalInfoDd>
              <span>{humidity}</span>
              <span>%</span>
            </StyledAdditionalInfoDd>
            <StyledAdditionalInfoDt>Temperature:</StyledAdditionalInfoDt>
            <StyledAdditionalInfoDd>
              <span>Min: {temperature.min}°C</span>
            </StyledAdditionalInfoDd>
            <StyledAdditionalInfoDd>
              <span>Max: {temperature.max}°C</span>
            </StyledAdditionalInfoDd>
            <StyledAdditionalInfoDd>
              <span>Feels like: {temperature.feelsLike}°C</span>
            </StyledAdditionalInfoDd>
          </StyledAdditionalInfo>
          ;
        </FlipCard>
      ) : (
        <Skeleton data-test="card-skeleton" width={180} height={240} />
      )}
    </StyledForecastCard>
  );
};

ForecastCard.propTypes = ForecastTypes;

export default ForecastCard;
