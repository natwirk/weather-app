import MistIcon from './index';

export default {
  title: 'Icons/Mist',
  component: MistIcon
};

const Template = args => <MistIcon {...args} />;

export const Default = () => <MistIcon />;
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
  width: 80
};
