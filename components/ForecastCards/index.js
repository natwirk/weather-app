import PropTypes from 'prop-types';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import ForecastCard from '../ForecastCard';
import forecastTypes from '../../types/forecast';

const StyledForecastCards = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
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
