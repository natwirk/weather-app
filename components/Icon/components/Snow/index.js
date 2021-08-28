import PropTypes from 'prop-types';
import { StyledLine, StyledPath } from '../SVGElements';

const SnowIcon = ({ color, width }) => {
  const lineProps = {
    dashOffset: 24,
    dashArray: 24,
    color: color,
    duration: '0.4s',
    timing: 'ease-out',
    delay: '1.2s'
  };
  const pathProps = {
    dashOffset: 48,
    dashArray: 48,
    color: color,
    duration: '0.5s',
    timing: 'ease-in-out',
    delay: '1s'
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 100 96.812"
    >
      <g transform="translate(66.604 0) rotate(90)">
        <StyledPath
          d="M0,0V46.777"
          transform="translate(46.777 16.604) rotate(90)"
          {...pathProps}
        />
        <StyledLine
          x1="23.482"
          transform="translate(6.878 0) rotate(45)"
          {...lineProps}
        />
        <StyledLine
          x1="23.482"
          transform="translate(6.878 33.208) rotate(-45)"
          {...lineProps}
        />
        <g transform="translate(93.618 33.208) rotate(180)">
          <StyledPath
            d="M0,0V46.777"
            transform="translate(46.777 16.604) rotate(90)"
            {...pathProps}
          />
          <StyledLine
            x1="23.482"
            transform="translate(6.878 0) rotate(45)"
            {...lineProps}
          />
          <StyledLine
            x1="23.482"
            transform="translate(6.878 33.208) rotate(-45)"
            {...lineProps}
          />
        </g>
      </g>
      <g transform="matrix(0.839, 0.545, -0.545, 0.839, 19.075, 7.775)">
        <StyledPath
          d="M0,0V46.777"
          transform="translate(46.777 16.604) rotate(90)"
          {...pathProps}
        />
        <StyledLine
          x1="23.482"
          transform="translate(6.878 0) rotate(45)"
          {...lineProps}
        />
        <StyledLine
          x1="23.482"
          transform="translate(6.878 33.208) rotate(-45)"
          {...lineProps}
        />
        <g transform="translate(93.618 33.208) rotate(180)">
          <StyledPath
            d="M0,0V46.777"
            transform="translate(46.777 16.604) rotate(90)"
            {...pathProps}
          />
          <StyledLine
            x1="23.482"
            transform="translate(6.878 0) rotate(45)"
            {...lineProps}
          />
          <StyledLine
            x1="23.482"
            transform="translate(6.878 33.208) rotate(-45)"
            {...lineProps}
          />
        </g>
      </g>
      <g transform="matrix(-0.891, 0.454, -0.454, -0.891, 100, 40.816)">
        <StyledPath
          d="M0,0V46.777"
          transform="translate(46.777 16.604) rotate(90)"
          {...pathProps}
        />
        <StyledLine
          x1="23.482"
          transform="translate(6.878 0) rotate(45)"
          {...lineProps}
        />
        <StyledLine
          x1="23.482"
          transform="translate(6.878 33.208) rotate(-45)"
          {...lineProps}
        />
        <g transform="translate(93.618 33.208) rotate(180)">
          <StyledPath
            d="M0,0V46.777"
            transform="translate(46.777 16.604) rotate(90)"
            {...pathProps}
          />
          <StyledLine
            x1="23.482"
            transform="translate(6.878 0) rotate(45)"
            {...lineProps}
          />
          <StyledLine
            x1="23.482"
            transform="translate(6.878 33.208) rotate(-45)"
            {...lineProps}
          />
        </g>
      </g>
    </svg>
  );
};

SnowIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SnowIcon.defaultProps = {
  width: 100
};

export default SnowIcon;
