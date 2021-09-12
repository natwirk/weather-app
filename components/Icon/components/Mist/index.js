import PropTypes from 'prop-types';
import { StyledLine } from '../SVGElements';

const MistIcon = ({ color, width }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 -15 100 100">
    <g transform="translate(0 1.5)">
      <StyledLine
        x2="68"
        transform="translate(16.991)"
        color={color}
        dashArray={68}
        dashOffset={68}
        duration="0.2s"
        delay="0s"
        timing="ease-in-out"
      />
      <StyledLine
        x2="60.788"
        transform="translate(0.203 18.871)"
        color={color}
        dashArray={68}
        dashOffset={68}
        duration="0.3s"
        timing="ease-in"
        delay="0.1s"
      />
      <StyledLine
        x2="31"
        transform="translate(68.991 18.871)"
        color={color}
        dashArray={68}
        dashOffset={68}
        duration="0.2s"
        timing="ease-in"
        delay="0.3s"
      />
      <StyledLine
        x2="28.703"
        transform="translate(0 37.743)"
        color={color}
        dashArray={68}
        dashOffset={68}
        duration="0.2s"
        timing="ease-in"
        delay="0.1s"
      />
      <StyledLine
        x2="57"
        transform="translate(36.788 37.743)"
        color={color}
        dashArray={68}
        dashOffset={68}
        duration="0.3s"
        timing="ease-in"
        delay="0.4s"
      />
      <StyledLine
        x2="57"
        transform="translate(22.491 56.614)"
        color={color}
        dashArray={68}
        dashOffset={68}
        duration="0.3s"
        timing="ease-in-out"
        delay="0.4s"
      />
    </g>
  </svg>
);

MistIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MistIcon.defaultProps = {
  width: 100
};

export default MistIcon;
