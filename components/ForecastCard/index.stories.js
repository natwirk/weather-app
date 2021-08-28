import ForecastCard from './index';

export default {
  title: 'ForecastCard',
  component: ForecastCard
};

const Template = args => <ForecastCard {...args} />;

const defaultProps = {
  conditions: {
    name: 'Clouds',
    icon: '02d',
    description: 'few clouds'
  },
  humidity: 58,
  time: '17:31',
  date: '20/04/21',
  temperature: {
    min: 12,
    max: 15,
    main: 14,
    feelsLike: 13
  },
  wind: {
    speed: 2.57,
    direction: 180
  }
};

export const Default = () => <ForecastCard {...defaultProps} />;
export const Loading = () => <ForecastCard />;
export const Playground = Template.bind({});

Default.parameters = Loading.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.args = defaultProps;
