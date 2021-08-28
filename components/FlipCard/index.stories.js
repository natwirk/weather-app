import FlipCard from './index';

export default {
  title: 'FlipCard',
  component: FlipCard
};

const Template = args => <FlipCard {...args} />;

export const Default = () => (
  <FlipCard width="200px" height="200px">
    <span>Some Content</span>
    <span>Flipped</span>
  </FlipCard>
);
export const Playground = Template.bind({});

Default.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.args = {
  children: [<div key={0}>Some Content</div>, <div key={1}>Flipped</div>],
  width: '200px',
  height: '100px'
};
