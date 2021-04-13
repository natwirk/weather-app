import CityInfo from './index';

export default {
  title: 'CityInfo',
  component: CityInfo
};

const Template = args => <CityInfo {...args} />;

export const Default = () => (
  <CityInfo name="Kraków" latitude={51.5085} longitude={-0.1257} />
);
export const Loading = () => <CityInfo />;
export const Playground = Template.bind({});

Default.parameters = Loading.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.args = {
  name: 'Kraków',
  latitude: 51.5085,
  longitude: -0.1257
};
