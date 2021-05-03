import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Card from '../Card';
import { StyledTitle } from '../Typography';

const StyledCoordinates = styled.ul`
  margin: 0;
  padding: 0;
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

const CityInfo = ({ latitude, longitude, name }) => {
  return (
    <Card data-test="component-city-info" width="350px">
      <StyledTitle data-test="name">
        {name || <Skeleton width={200} />}
      </StyledTitle>
      <StyledCoordinates>
        <StyledCoordinatesItem>
          <StyledCoordinatesTitle>Latitude</StyledCoordinatesTitle>
          <StyledCoordinatesValue data-test="latitude">
            {latitude || <Skeleton width={200} />}
          </StyledCoordinatesValue>
        </StyledCoordinatesItem>
        <StyledCoordinatesItem>
          <StyledCoordinatesTitle>Longitude</StyledCoordinatesTitle>
          <StyledCoordinatesValue data-test="longitude">
            {longitude || <Skeleton width={200} />}
          </StyledCoordinatesValue>
        </StyledCoordinatesItem>
      </StyledCoordinates>
    </Card>
  );
};

CityInfo.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  name: PropTypes.string
};

export default CityInfo;
