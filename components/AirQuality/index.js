import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { StyledTitle } from '../Typography';
import Card from '../Card';
import quality from './quality';

const StyledItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StyledItem = styled.li`
  margin-bottom: 2rem;
`;

const StyledItemTitle = styled.span`
  font-size: 1.4rem;
`;

const StyledItemValue = styled.span`
  font-weight: 700;
  margin-left: 1rem;
`;

const AirQuality = ({ pm2_5, pm10, qualityIndex }) => {
  return (
    <Card
      background={quality.get(qualityIndex)?.background}
      data-test="component-air-quality"
      width="300px"
      center={true}
    >
      <StyledTitle>Air Pollution</StyledTitle>
      <StyledItems>
        <StyledItem data-test="quality-index">
          {quality.get(qualityIndex)?.text || <Skeleton width={100} />}
        </StyledItem>
        <StyledItem>
          <StyledItemTitle>PM 2.5:</StyledItemTitle>
          <StyledItemValue data-test="pm-2-5">
            {pm2_5 || <Skeleton width={40} />}
          </StyledItemValue>
        </StyledItem>
        <StyledItem>
          <StyledItemTitle>PM 10:</StyledItemTitle>
          <StyledItemValue data-test="pm-10">
            {pm10 || <Skeleton width={40} />}
          </StyledItemValue>
        </StyledItem>
      </StyledItems>
    </Card>
  );
};

AirQuality.propTypes = {
  qualityIndex: PropTypes.oneOf([1, 2, 3, 4, 5]),
  pm2_5: PropTypes.number,
  pm10: PropTypes.number
};

export default AirQuality;
