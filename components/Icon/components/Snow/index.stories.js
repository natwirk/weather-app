import SnowIcon from './index';

export default {
  title: 'Icons/Snow',
  component: SnowIcon
};

const Template = args => <SnowIcon {...args} />;

export const Default = () => <SnowIcon />;
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

Playground.args = {
  color: '#fff',
  width: 100
};
