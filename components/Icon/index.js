import PropTypes from 'prop-types';
import types from './types';

const Icon = ({ code, color, width }) => {
  const Component = types[code];
  if (Component) {
    return <Component color={color} width={width} />;
  }
  return <div />;
};

Icon.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.defaultProps = {
  width: 100
};

export default Icon;
