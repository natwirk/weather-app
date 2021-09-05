import { useRouter } from 'next/router';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { findByTestAttribute } from '../../test/testUtils';
import CitiesList, { list } from './index';
import themes from '../../styles/themes';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const setup = () => {
  return shallow(
    <ThemeProvider theme={themes.lightDefault}>
      <CitiesList />
    </ThemeProvider>
  );
};

const wrapper = setup();

const push = jest.fn();
useRouter.mockImplementation(() => ({
  push
}));

test('renders component', () => {
  const component = findByTestAttribute(
    wrapper.dive().dive(),
    'component-cities-list'
  );
  component.debug();
  expect(component.length).toBe(1);
});

test('renders and item for each city in the list', () => {
  const components = findByTestAttribute(wrapper.dive().dive(), 'list-item');
  expect(components.length).toBe(list.length);
  components.forEach((item, index) => {
    expect(item.dive().text()).toBe(list[index].name);
  });
});

test('redirects to the correct city on click', () => {
  const event = {
    preventDefault: () => {}
  };
  const buttons = findByTestAttribute(wrapper.dive().dive(), 'list-button');
  expect(buttons.length).toBe(list.length);
  buttons.forEach((button, index) => {
    button.simulate('click', event);
    const value = encodeURIComponent(list[index].name);
    expect(push).toHaveBeenCalledWith(`weather/${value}`);
  });
});
