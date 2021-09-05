import styled, { useTheme } from 'styled-components';
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
  color: ${({ loaded, theme }) =>
    loaded ? theme.color.secondary : theme.color.primary};
  transition: color 300ms ease-in-out 1000ms;
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
  const theme = useTheme();
  return (
    <Card
      background={theme.airQuality[quality.get(qualityIndex)?.background]}
      data-test="component-air-quality"
    >
      <StyledTitle color={qualityIndex ? 'secondary' : 'primary'}>
        Air Quality
      </StyledTitle>
      <StyledItems loaded={qualityIndex}>
        <StyledItem>
          <SwitchTransition>
            <CSSTransition
              key={qualityIndex ? 'loaded' : 'loading'}
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
