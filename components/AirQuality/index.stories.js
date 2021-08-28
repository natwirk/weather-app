import AirQuality from './index';

export default {
  title: 'AirQuality',
  component: AirQuality
};

const Template = args => <AirQuality {...args} />;

export const Default = () => (
  <AirQuality pm2_5={13.52} pm10={16.05} qualityIndex={2} />
);
export const Loading = () => <AirQuality />;
export const Playground = Template.bind({});

Default.parameters = Loading.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.argTypes = {
  qualityIndex: { control: { type: 'number', min: 1, max: 5 } }
};

Playground.args = {
  pm2_5: undefined,
  pm10: undefined,
  qualityIndex: undefined
};
