import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../test/testUtils';
import AirQuality from './index';
import quality from './quality';

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<AirQuality {...setupProps} />);
};

let wrapper;
let currentProps;

describe('renders without error when data is provided', () => {
  beforeEach(() => {
    currentProps = {
      pm2_5: 2.21,
      pm10: 3.07,
      qualityIndex: 1
    };
    wrapper = setup(currentProps);
  });

  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-air-quality');
    expect(component.length).toBe(1);
  });

  test('renders quality index data without error', () => {
    const component = findByTestAttribute(wrapper, 'quality-index');
    expect(component.text()).toBe(quality.get(currentProps.qualityIndex).text);
  });

  test('renders pm 2.5 data without error', () => {
    const component = findByTestAttribute(wrapper, 'pm-2-5');
    expect(component.text()).toBe(currentProps.pm2_5.toString());
  });

  test('renders pm 10 data without error', () => {
    const component = findByTestAttribute(wrapper, 'pm-10');
    expect(component.text()).toBe(currentProps.pm10.toString());
  });
});

describe('renders without error when data is not provided', () => {
  beforeEach(() => {
    wrapper = setup({});
  });
  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-air-quality');
    expect(component.length).toBe(1);
  });

  test('renders quality index wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'quality-index');
    expect(component.length).toBe(1);
  });

  test('renders pm 2.5 wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'pm-2-5');
    expect(component.length).toBe(1);
  });

  test('renders pm 10 wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'pm-10');
    expect(component.length).toBe(1);
  });
});
