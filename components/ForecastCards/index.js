import PropTypes from 'prop-types';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ForecastCard from '../ForecastCard';
import forecastTypes from '../../types/forecast';
import { breakpoints } from '../../styles/breakpoints';

const StyledForecastCards = styled.div`
  display: flex;
  max-width: calc(100% + 4rem);
  overflow-x: auto;
  margin: 0 -2rem;
  padding: 0 1rem 1.5rem 0;
  @media ${breakpoints.lg} {
    max-width: 100%;
    margin: 0 0 1.5rem 0;
  }
`;

const skeletonData = [...Array(8)].map(() => nanoid());

const ForecastCards = ({ forecast }) => (
  <>
    <SwitchTransition>
      <CSSTransition
        key={forecast ? 'loaded' : 'loading'}
        classNames="fade"
        timeout={500}
      >
        <StyledForecastCards data-test="component-forecast-cards">
          {forecast
            ? forecast.map(element => (
                <ForecastCard
                  data-test="forecast-card"
                  key={element.id}
                  {...element}
                />
              ))
            : skeletonData.map(element => (
                <ForecastCard
                  data-test="forecast-skeleton-card"
                  key={element}
                />
              ))}
        </StyledForecastCards>
      </CSSTransition>
    </SwitchTransition>
  </>
);

ForecastCards.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape(forecastTypes))
};

export default ForecastCards;
