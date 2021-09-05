import CitiesList from './index';

export default {
  title: 'CitiesList',
  component: CitiesList
};

export const Default = () => <CitiesList />;

Default.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};
