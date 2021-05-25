import AirPollution from './index';

export default {
  title: 'AirPollution',
  component: AirPollution
};

const Template = args => <AirPollution {...args} />;

export const Default = () => (
  <AirPollution pm2_5={13.52} pm10={16.05} qualityIndex={2} />
);
export const Loading = () => <AirPollution />;
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
