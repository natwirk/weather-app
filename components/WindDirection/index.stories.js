import WindDirection from './index';

export default {
  title: 'WindDirection',
  component: WindDirection
};

const Template = args => <WindDirection {...args} />;

export const Default = () => <WindDirection />;
export const Playground = Template.bind({});

Default.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.args = {
  deg: 0,
  size: '3rem'
};
