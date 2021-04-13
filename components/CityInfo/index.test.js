import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../test/testUtils';
import CityInfo from './index';

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CityInfo {...setupProps} />);
};

let wrapper;
let currentProps;

describe('renders without error when data is provided', () => {
  beforeEach(() => {
    currentProps = {
      name: 'Kraków',
      latitude: 51.5085,
      longitude: -0.1257
    };
    wrapper = setup(currentProps);
  });

  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-city-info');
    expect(component.length).toBe(1);
  });

  test('renders name of the city without error', () => {
    const component = findByTestAttribute(wrapper, 'name');
    expect(component.text()).toBe(currentProps.name);
  });

  test('renders latitude without error', () => {
    const component = findByTestAttribute(wrapper, 'latitude');
    expect(component.text()).toBe(currentProps.latitude.toString());
  });

  test('renders longitude without error', () => {
    const component = findByTestAttribute(wrapper, 'longitude');
    expect(component.text()).toBe(currentProps.longitude.toString());
  });
});

describe('renders without error when data is not provided', () => {
  beforeEach(() => {
    wrapper = setup({});
  });

  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-city-info');
    expect(component.length).toBe(1);
  });

  test('renders space for the name of the city without error', () => {
    const component = findByTestAttribute(wrapper, 'name');
    expect(component.length).toBe(1);
  });

  test('renders space for the latitude without error', () => {
    const component = findByTestAttribute(wrapper, 'latitude');
    expect(component.length).toBe(1);
  });

  test('renders space for the longitude without error', () => {
    const component = findByTestAttribute(wrapper, 'longitude');
    expect(component.length).toBe(1);
  });
});
