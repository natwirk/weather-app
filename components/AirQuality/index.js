import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { StyledTitle } from '../Typography';
import Card from '../Card';
import quality from './quality';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const StyledItems = styled.ul`
  list-style-type: none;
  margin: 2rem 0 0;
  padding: 0;
`;

const StyledItem = styled.li`
  margin-bottom: 2rem;
`;

const StyledItemValue = styled.span`
  font-weight: 700;
  margin-left: 1rem;
  font-size: 1.8rem;
`;

const AirQuality = ({ pm2_5, pm10, qualityIndex }) => {
  return (
    <Card
      background={quality.get(qualityIndex)?.background}
      data-test="component-air-quality"
    >
      <StyledTitle>Air Quality</StyledTitle>
      <StyledItems>
        <StyledItem>
          <SwitchTransition>
            <CSSTransition
              key={quality.get(qualityIndex)?.text ? 'loaded' : 'loading'}
              classNames="fade"
              timeout={500}
            >
              <span data-test="quality-index">
                {quality.get(qualityIndex)?.text || <Skeleton width={100} />}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </StyledItem>
        <StyledItem>
          <span>PM 2.5:</span>
          <StyledItemValue>
            <SwitchTransition>
              <CSSTransition
                key={pm2_5 ? 'loaded' : 'loading'}
                classNames="fade"
                timeout={500}
              >
                <span data-test="pm-2-5">
                  {pm2_5 || <Skeleton width={40} />}
                </span>
              </CSSTransition>
            </SwitchTransition>
          </StyledItemValue>
        </StyledItem>
        <StyledItem>
          <span>PM 10:</span>
          <StyledItemValue>
            <SwitchTransition>
              <CSSTransition
                key={pm10 ? 'loaded' : 'loading'}
                classNames="fade"
                timeout={500}
              >
                <span data-test="pm-10">{pm10 || <Skeleton width={40} />}</span>
              </CSSTransition>
            </SwitchTransition>
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
