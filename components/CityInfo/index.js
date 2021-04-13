import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { StyledTitle } from '../Typography';

const StyledWrapper = styled.div`
  border-radius: 10px;
  width: 400px;
  padding: 20px 30px 30px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  color: rgba(255, 255, 255, 0.9);
`;

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
    <StyledWrapper data-test="component-city-info">
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
    </StyledWrapper>
  );
};

CityInfo.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  name: PropTypes.string
};

export default CityInfo;
