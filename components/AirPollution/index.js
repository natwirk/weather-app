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

const StyledItems = styled.ul`
  list-style-type: none;
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

const AirPollution = ({ pm2_5, pm10 }) => {
  return (
    <StyledWrapper data-test="component-air-pollution">
      <StyledTitle>Air Pollution</StyledTitle>
      <StyledItems>
        <StyledItem>
          <StyledItemTitle>PM 2.5:</StyledItemTitle>
          <StyledItemValue data-test="pm-2-5">
            {pm2_5 || <Skeleton width={100} />}
          </StyledItemValue>
        </StyledItem>
        <StyledItem>
          <StyledItemTitle>PM 10:</StyledItemTitle>
          <StyledItemValue data-test="pm-10">
            {pm10 || <Skeleton width={100} />}
          </StyledItemValue>
        </StyledItem>
      </StyledItems>
    </StyledWrapper>
  );
};

AirPollution.propTypes = {
  pm2_5: PropTypes.number,
  pm10: PropTypes.number
};

export default AirPollution;
