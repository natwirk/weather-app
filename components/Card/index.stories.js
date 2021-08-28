import Card from './index';

export default {
  title: 'Card',
  component: Card
};

const Template = args => <Card {...args} />;

export const Default = () => (
  <Card width="400px">
    <p>Some Content</p>
  </Card>
);
export const Playground = Template.bind({});

Default.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.argTypes = {
  children: {
    control: {
      type: 'text'
    }
  }
};

Playground.args = {
  children: 'Some content',
  width: '400px'
};
