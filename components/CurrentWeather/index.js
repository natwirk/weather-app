import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';
import Icon from '../Icon';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import WindDirection from '../WindDirection';
import ForecastTypes from '../../types/forecast';

const StyledDescription = styled.p`
  font-size: 2.8rem;
  grid-column: 2;
  margin: 0;
`;

const StyledTemperature = styled.p`
  grid-column: 2;
  font-size: 4.8rem;
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
  grid-template-columns: repeat(3, auto);
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

const CurrentWeather = ({
  conditions,
  humidity,
  maxWidth,
  temperature,
  wind
}) => {
  return (
    <Card
      data-test="component-current-weather"
      width="100%"
      height="100%"
      maxWidth={maxWidth}
    >
      <StyledInfo>
        <StyledIconWrapper>
          <SwitchTransition>
            <CSSTransition
              key={conditions?.icon}
              classNames="fade"
              timeout={500}
            >
              {conditions?.icon ? (
                <Icon data-test="icon" width="120px" code={conditions.icon} />
              ) : (
                <Skeleton width="120px" height="100px" />
              )}
            </CSSTransition>
          </SwitchTransition>
        </StyledIconWrapper>
        <StyledTemperature>
          <SwitchTransition>
            <CSSTransition
              key={temperature?.main}
              classNames="fade"
              timeout={500}
            >
              <span data-test="temperature">
                {temperature?.main ? (
                  <span>{temperature.main}°C</span>
                ) : (
                  <Skeleton width="115px" />
                )}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </StyledTemperature>
        <StyledDescription>
          <SwitchTransition>
            <CSSTransition
              key={conditions?.description}
              classNames="fade"
              timeout={500}
            >
              <span data-test="description">
                {conditions?.description || <Skeleton width="126px" />}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </StyledDescription>
        <StyledData>
          <StyledDataHeading>Wind:</StyledDataHeading>
          <SwitchTransition>
            <CSSTransition
              key={
                (wind?.speed || wind?.speed === 0) &&
                (wind?.direction || wind?.direction === 0)
                  ? 'loaded'
                  : 'loading'
              }
              classNames="fade"
              timeout={500}
            >
              <span>
                {(wind?.speed || wind?.speed === 0) && wind.speed + 'km/h'}
                {(wind?.direction || wind?.direction === 0) && (
                  <WindDirection
                    data-test="wind"
                    deg={wind.direction}
                    size="2rem"
                  />
                )}
                {((!wind?.speed && wind?.speed !== 0) ||
                  (!wind.direction && wind?.direction !== 0)) && (
                  <Skeleton width="80px" />
                )}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </StyledData>
        <StyledData>
          <StyledDataHeading>Humidity:</StyledDataHeading>
          <SwitchTransition>
            <CSSTransition key={humidity} classNames="fade" timeout={500}>
              <span data-test="humidity">
                {humidity ? (
                  <span>{humidity} %</span>
                ) : (
                  <Skeleton width="80px" />
                )}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </StyledData>
      </StyledInfo>

      <StyledAdditionalInfo>
        <StyledAdditionalInfoDt>Temperature:</StyledAdditionalInfoDt>
        <StyledAdditionalInfoDd>
          <SwitchTransition>
            <CSSTransition
              key={temperature?.min}
              classNames="fade"
              timeout={500}
            >
              <span data-test="temperature-min">
                {temperature?.min ? (
                  <span>Min: {temperature.min}°C</span>
                ) : (
                  <Skeleton width="100%" />
                )}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </StyledAdditionalInfoDd>
        <StyledAdditionalInfoDd>
          <SwitchTransition>
            <CSSTransition
              key={temperature?.max}
              classNames="fade"
              timeout={500}
            >
              <span data-test="temperature-max">
                {temperature?.max ? (
                  <span>Max: {temperature.max}°C</span>
                ) : (
                  <Skeleton width="100%" />
                )}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </StyledAdditionalInfoDd>
        <StyledAdditionalInfoDd>
          <SwitchTransition>
            <CSSTransition
              key={temperature?.feelsLike}
              classNames="fade"
              timeout={500}
            >
              <span data-test="temperature-feels-like">
                {temperature?.max ? (
                  <span>Feels like: {temperature.feelsLike}°C</span>
                ) : (
                  <Skeleton width="100%" />
                )}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </StyledAdditionalInfoDd>
      </StyledAdditionalInfo>
    </Card>
  );
};

CurrentWeather.propTypes = {
  ...ForecastTypes,
  maxWidth: PropTypes.string
};

CurrentWeather.defaultProps = {
  maxWidth: '100%'
};

export default CurrentWeather;
