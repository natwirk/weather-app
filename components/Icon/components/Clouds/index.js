import PropTypes from 'prop-types';
import types from './types';
import { StyledLine, StyledPath } from '../SVGElements';

const RainRow = ({ color, delay, index, isOddRow, initialX, initialY }) => {
  if ((isOddRow && index % 2 === 0) || (!isOddRow && index % 2 === 1)) {
    return (
      <StyledLine
        x1="1"
        y2="8"
        transform={`translate(${initialX + index * 10} ${initialY})`}
        color={color}
        dashOffset={30}
        dashArray={30}
        duration="0.1s"
        timing="ease-in"
        delay={delay + 0.6 + 's'}
      />
    );
  }
  return <></>;
};

RainRow.propTypes = {
  color: PropTypes.string,
  delay: PropTypes.number,
  index: PropTypes.number,
  isOddRow: PropTypes.bool,
  initialX: PropTypes.number,
  initialY: PropTypes.number
};

const CloudsIcon = ({ color, night, type, width }) => {
  const numberOfColumns = 7;
  const rowsToMap = [...Array(numberOfColumns).keys()];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 116.508 125.674"
    >
      <StyledPath
        d="M684.684,439.077H612.69s-11.106-.214-12.43-9.03c-.46-6.024,2.258-14.126,13.77-12.921,2.686.672,5.8,1.811,5.8,1.811s-5.764-9.724,1.771-15.415c7.449-5.717,15.944.7,16.934,0a27.355,27.355,0,0,1,0-10.881c2.739-9.363,11.566-12.175,18.414-11.051,3.812.031,20.14,4.523,16.052,21.932,1.656-2.5,22.168-1.536,26.607,13.6C703.828,437.094,684.684,439.077,684.684,439.077Z"
        transform="translate(-597.212 -359.5)"
        color={color}
        dashOffset={301}
        dashArray={301}
        duration="0.6s"
        timing="ease-out"
      />
      {(type === types.RAIN || type === types.SHOWER_RAIN) && (
        <>
          {rowsToMap.map(key => (
            <RainRow
              key={key}
              index={key}
              color={color}
              isOddRow={true}
              initialX={22.288}
              initialY={88}
              type={type}
              delay={0}
            />
          ))}
          {rowsToMap.map(key => (
            <RainRow
              key={key}
              index={key}
              color={color}
              isOddRow={false}
              initialX={20.288}
              initialY={102}
              type={type}
              delay={0.1}
            />
          ))}
          {rowsToMap.map(key => (
            <RainRow
              key={key}
              index={key}
              color={color}
              isOddRow={true}
              initialX={18.288}
              initialY={116}
              type={type}
              delay={0.2}
            />
          ))}
        </>
      )}
      {type === types.THUNDERSTORM && (
        <>
          <StyledPath
            d="M800,499.127l-8.765,18.044h11.429L791.235,539.15"
            transform="translate(-752.664 -419.406)"
            color={color}
            dashOffset={80}
            dashArray={80}
            duration="0.2s"
            timing="ease-out"
            delay="0.6s"
          />
        </>
      )}
      {(type === types.SHOWER_RAIN || type === types.FEW_CLOUDS) && (
        <>
          <StyledPath
            d="M90.738,28.225h0a27.58,27.58,0,0,0-13.509-3.761c-2.309,0-4.012.406-4.445,1.059,1.075-4.578.817-8.63-.768-12.044A15.982,15.982,0,0,0,65.8,6.665,16.5,16.5,0,0,1,90.739,28.224Z"
            transform="translate(3 18.357)"
            color={color}
            dashOffset={100}
            dashArray={100}
            duration="0.6s"
            timing="ease-out"
          />
          {!night && (
            <>
              <StyledLine
                y1="10"
                transform="translate(81.288)"
                color={color}
                dashOffset={20}
                dashArray={20}
                duration="0.15s"
                timing="ease-out"
                delay="0.7s"
              />
              <StyledLine
                y1="10"
                transform="translate(117 34) rotate(90)"
                color={color}
                dashOffset={20}
                dashArray={20}
                duration="0.15s"
                timing="ease-out"
                delay="0.7s"
              />
              <StyledLine
                y1="10"
                transform="translate(108.95 8.05) rotate(45)"
                color={color}
                dashOffset={20}
                dashArray={20}
                duration="0.15s"
                timing="ease-out"
                delay="0.7s"
              />
              <StyledLine
                y1="10"
                transform="translate(53.626 8.05) rotate(-45)"
                color={color}
                dashOffset={20}
                dashArray={20}
                duration="0.15s"
                timing="ease-out"
                delay="0.7s"
              />
            </>
          )}
        </>
      )}
    </svg>
  );
};

CloudsIcon.propTypes = {
  color: PropTypes.string,
  night: PropTypes.bool,
  type: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudsIcon.defaultProps = {
  color: '#fff',
  night: false,
  type: types.DEFAULT,
  width: 100
};

export default CloudsIcon;
