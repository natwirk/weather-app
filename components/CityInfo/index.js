import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { StyledHeading } from '../Typography';
import { breakpoints } from '../../styles/breakpoints';

const StyledCoordinates = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: ${({ theme }) => theme.color.primary};
  @media ${breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const StyledCoordinatesItem = styled.li`
  margin-bottom: 1rem;
`;

const StyledCoordinatesTitle = styled.span`
  font-weight: 700;
  &:after {
    content: ':';
  }
`;

const StyledCoordinatesValue = styled.span`
  margin-left: 1rem;
`;

const StyledTime = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
  font-size: 3.6rem;
  margin-bottom: 2rem;
`;

const CityInfo = ({
  country,
  latitude,
  longitude,
  name,
  sunrise,
  sunset,
  time
}) => {
  return (
    <div data-test="component-city-info">
      <StyledHeading align="left">
        <SwitchTransition>
          <CSSTransition
            key={name && country ? 'loaded' : 'loading'}
            classNames="fade"
            timeout={500}
          >
            <span data-test="name">
              {name || <Skeleton width={200} />},{' '}
              {country || <Skeleton width={40} />}
            </span>
          </CSSTransition>
        </SwitchTransition>
      </StyledHeading>
      <StyledTime>
        <SwitchTransition>
          <CSSTransition
            key={time ? 'loaded' : 'loading'}
            classNames="fade"
            timeout={500}
          >
            <span data-test="time">{time || <Skeleton width={200} />}</span>
          </CSSTransition>
        </SwitchTransition>
      </StyledTime>
      <StyledCoordinates>
        <StyledCoordinatesItem>
          <StyledCoordinatesTitle>Latitude</StyledCoordinatesTitle>
          <StyledCoordinatesValue>
            <SwitchTransition>
              <CSSTransition
                key={latitude ? 'loaded' : 'loading'}
                classNames="fade"
                timeout={500}
              >
                <span data-test="latitude">
                  {latitude || <Skeleton width={70} />}
                </span>
              </CSSTransition>
            </SwitchTransition>
          </StyledCoordinatesValue>
        </StyledCoordinatesItem>
        <StyledCoordinatesItem>
          <StyledCoordinatesTitle>Longitude</StyledCoordinatesTitle>
          <StyledCoordinatesValue>
            <SwitchTransition>
              <CSSTransition
                key={longitude ? 'loaded' : 'loading'}
                classNames="fade"
                timeout={500}
              >
                <span data-test="longitude">
                  {longitude || <Skeleton width={70} />}
                </span>
              </CSSTransition>
            </SwitchTransition>
          </StyledCoordinatesValue>
        </StyledCoordinatesItem>
        <StyledCoordinatesItem>
          <StyledCoordinatesTitle>Sunrise</StyledCoordinatesTitle>
          <StyledCoordinatesValue>
            <SwitchTransition>
              <CSSTransition
                key={sunrise ? 'loaded' : 'loading'}
                classNames="fade"
                timeout={500}
              >
                <span data-test="sunrise">
                  {sunrise || <Skeleton width={70} />}
                </span>
              </CSSTransition>
            </SwitchTransition>
          </StyledCoordinatesValue>
        </StyledCoordinatesItem>
        <StyledCoordinatesItem>
          <StyledCoordinatesTitle>Sunset</StyledCoordinatesTitle>
          <StyledCoordinatesValue>
            <SwitchTransition>
              <CSSTransition
                key={sunset ? 'loaded' : 'loading'}
                classNames="fade"
                timeout={500}
              >
                <span data-test="sunset">
                  {sunset || <Skeleton width={70} />}
                </span>
              </CSSTransition>
            </SwitchTransition>
          </StyledCoordinatesValue>
        </StyledCoordinatesItem>
      </StyledCoordinates>
    </div>
  );
};

CityInfo.propTypes = {
  country: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  name: PropTypes.string,
  sunset: PropTypes.string,
  sunrise: PropTypes.string,
  time: PropTypes.string
};

export default CityInfo;
