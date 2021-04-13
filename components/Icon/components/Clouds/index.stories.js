import CloudsIcon from './index';
import types from './types';

export default {
  title: 'Icons/Clouds',
  component: CloudsIcon
};

const Template = args => <CloudsIcon {...args} />;

export const Default = () => <CloudsIcon />;
export const FewClouds = () => <CloudsIcon type={types.FEW_CLOUDS} />;
export const Rain = () => <CloudsIcon type={types.RAIN} />;
export const ShowerRain = () => <CloudsIcon type={types.SHOWER_RAIN} />;
export const Thunderstorm = () => <CloudsIcon type={types.THUNDERSTORM} />;
export const Playground = Template.bind({});

const parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Default.parameters = FewClouds.parameters = Rain.parameters = ShowerRain.parameters = Thunderstorm.parameters = parameters;

Playground.argTypes = {
  color: {
    control: {
      type: 'color'
    }
  },
  type: {
    control: {
      type: 'select',
      options: Object.values(types)
    }
  }
};

Playground.args = {
  type: types.DEFAULT,
  width: 100
};
