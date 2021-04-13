import PropTypes from 'prop-types';
import types from './types';

const Icon = ({ code, color, width }) => {
  const Component = types[code];
  return <Component color={color} width={width} />;
};

Icon.propTypes = {
  code: PropTypes.string
};

Icon.defaultProps = {
  code: '01d',
  color: '#fff',
  width: 100
};

export default Icon;
