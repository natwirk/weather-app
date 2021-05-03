import ForecastCards from './index';
import testData from './testData';

export default {
  title: 'ForecastCards',
  component: ForecastCards
};

const Template = args => <ForecastCards {...args} />;

export const Default = () => <ForecastCards forecast={testData} />;
export const Loading = () => <ForecastCards />;
export const Playground = Template.bind({});

Default.parameters = Loading.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.args = {
  forecast: testData
};
