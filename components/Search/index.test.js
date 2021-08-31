import { mount } from 'enzyme';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/client/testing';
import { findByTestAttribute } from '../../test/testUtils';
import Search from './index';
import { items, mocks } from './testData';
import themes from '../../styles/themes';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const setup = ({ mocks }) => {
  return mount(
    <ThemeProvider theme={themes.lightDefault}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Search />
      </MockedProvider>
    </ThemeProvider>
  );
};

let wrapper = setup({ mocks });

const push = jest.fn();
useRouter.mockImplementation(() => ({
  push
}));

test('renders container', () => {
  const component = findByTestAttribute(
    wrapper,
    'component-search'
  ).hostNodes();
  expect(component.length).toBe(1);
});

test('renders input', () => {
  const component = findByTestAttribute(wrapper, 'input').hostNodes();
  expect(component.length).toBe(1);
});

describe('on loading', () => {
  const event = {
    target: {
      value: 'London'
    }
  };
  beforeEach(async () => {
    wrapper = setup({ mocks });
    const component = findByTestAttribute(wrapper, 'input').hostNodes();
    component.simulate('change', event);
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      wrapper.update();
    });
  });
  test('renders loader', () => {
    const component = findByTestAttribute(wrapper, 'loader').hostNodes();
    expect(component.length).toBe(1);
  });
  test('renders 3 skeletons', () => {
    const component = findByTestAttribute(wrapper, 'skeleton');
    expect(component.length).toBe(3);
  });
});

describe('on loaded', () => {
  const event = {
    target: {
      value: 'London'
    }
  };
  beforeEach(async () => {
    wrapper = setup({ mocks });
    const component = findByTestAttribute(wrapper, 'input').hostNodes();
    component.simulate('change', event);
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      wrapper.update();
      await new Promise(resolve => setTimeout(resolve, 0));
      wrapper.update();
    });
  });
  test('renders buttons that redirect to correct page', () => {
    const buttons = findByTestAttribute(wrapper, 'button').hostNodes();
    expect(buttons.length).toBe(items.length);

    buttons.forEach((button, index) => {
      button.simulate('click');
      const item = items[index];
      const delimeter = encodeURIComponent(',');
      expect(push).toHaveBeenCalledWith(
        `weather/${item.name}${delimeter}${item.country}`
      );
    });
  });
});
