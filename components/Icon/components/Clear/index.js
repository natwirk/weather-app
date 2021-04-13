import PropTypes from 'prop-types';
import { StyledCircle, StyledLine } from '../SVGElements';

const ClearIcon = ({ color, night, width }) => {
  const lineProps = {
    dashOffset: 22,
    dashArray: 22,
    color: color,
    duration: '0.7s',
    timing: 'ease-out',
    delay: '0.8s'
  };
  return (
    <svg viewBox="0 0 100 100" height="auto" width={width}>
      {!night && (
        <>
          <StyledLine x1="25" y1="30" x2="10" y2="15" {...lineProps} />
          <StyledLine x1="50" y1="20" x2="50" y2="0" {...lineProps} />
          <StyledLine x1="75" y1="30" x2="90" y2="15" {...lineProps} />
          <StyledLine x1="20" y1="50" x2="0" y2="50" {...lineProps} />
          <StyledLine x1="80" y1="50" x2="100" y2="50" {...lineProps} />
          <StyledLine x1="25" y1="70" x2="10" y2="85" {...lineProps} />
          <StyledLine x1="50" y1="80" x2="50" y2="100" {...lineProps} />
          <StyledLine x1="75" y1="70" x2="90" y2="85" {...lineProps} />
        </>
      )}

      <StyledCircle
        cx="50"
        cy="50"
        r="16"
        dashOffset={101}
        dashArray={101}
        color={color}
        duration="0.7s"
        timing="ease-in-out"
      />
    </svg>
  );
};

ClearIcon.propTypes = {
  color: PropTypes.string,
  night: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClearIcon.defaultProps = {
  color: '#fff',
  night: false,
  width: 100
};

export default ClearIcon;
