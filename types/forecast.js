import PropTypes from 'prop-types';

export default {
  conditions: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string
  }),
  date: PropTypes.string,
  humidity: PropTypes.number,
  temperature: PropTypes.shape({
    feelsLike: PropTypes.number,
    main: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
  }),
  time: PropTypes.string,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.number
  })
}