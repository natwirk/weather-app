import ClearIcon from './index';

export default {
  title: 'Icons/Clear',
  component: ClearIcon
};

const Template = args => <ClearIcon {...args} />;

export const Default = () => <ClearIcon />;
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
  width: 100,
  color: '#fff'
};
