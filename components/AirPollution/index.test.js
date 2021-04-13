import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../test/testUtils';
import AirPollution from './index';

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<AirPollution {...setupProps} />);
};

let wrapper;
let currentProps;

describe('renders without error when data is provided', () => {
  beforeEach(() => {
    currentProps = {
      pm2_5: 13.52,
      pm10: 16.05
    };
    wrapper = setup(currentProps);
  });

  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-air-pollution');
    expect(component.length).toBe(1);
  });

  test('renders pm 2.5 without error', () => {
    const component = findByTestAttribute(wrapper, 'pm-2-5');
    expect(component.text()).toBe(currentProps.pm2_5.toString());
  });

  test('renders pm 10 without error', () => {
    const component = findByTestAttribute(wrapper, 'pm-10');
    expect(component.text()).toBe(currentProps.pm10.toString());
  });
});

describe('renders without error when data is not provided', () => {
  beforeEach(() => {
    wrapper = setup({});
  });
  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-air-pollution');
    expect(component.length).toBe(1);
  });

  test('renders pm 2.5 without error', () => {
    const component = findByTestAttribute(wrapper, 'pm-2-5');
    expect(component.length).toBe(1);
  });

  test('renders pm 10 without error', () => {
    const component = findByTestAttribute(wrapper, 'pm-10');
    expect(component.length).toBe(1);
  });
});
