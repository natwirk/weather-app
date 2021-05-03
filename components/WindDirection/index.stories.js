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

Playground.argTypes = {
  color: {
    control: {
      type: 'color'
    }
  }
};

Playground.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.args = {
  color: '#fff',
  deg: 0,
  size: '3rem'
};
