import Icon from './index';
import types from './types';

export default {
  title: 'Icon',
  component: Icon
};

const Template = args => <Icon {...args} />;

export const Default = () => <Icon code="01d" />;
export const Playground = Template.bind({});

Default.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Default.argTypes = {
  code: {
    description: 'Icon code returned by OpenWeather API'
  }
};

Playground.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.argTypes = {
  color: {
    control: {
      type: 'color'
    }
  },
  code: {
    control: {
      type: 'select',
      description: 'Icon code returned by OpenWeather API',
      options: Object.keys(types)
    },
    description: 'Icon code returned by OpenWeather API'
  }
};

Playground.args = {
  code: '01d',
  color: 'rgba(0, 0, 0, 0.88)',
  width: 100
};
