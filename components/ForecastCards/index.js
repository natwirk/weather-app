import PropTypes from 'prop-types';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import ForecastCard from '../ForecastCard';
import forecastTypes from '../../types/forecast';
import { breakpoints } from '../../styles/breakpoints';

const StyledForecastCards = styled.div`
  display: flex;
  max-width: calc(100% + 4rem);
  overflow-x: auto;
  margin: 0 -2rem;
  padding: 0 1rem;
  @media ${breakpoints.lg} {
    max-width: calc(100% + 2rem);
    margin: 0 0 0 -2rem;
    padding: 0 0 0 1rem;
  }
`;

const skeletonData = [...Array(8)].map(() => nanoid());

const ForecastCards = ({ forecast }) => (
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
          <ForecastCard data-test="forecast-skeleton-card" key={element} />
        ))}
  </StyledForecastCards>
);

ForecastCards.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape(forecastTypes))
};

export default ForecastCards;
