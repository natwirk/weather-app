import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../test/testUtils';
import CurrentWeather from './index';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<CurrentWeather {...setupProps} />);
};

let wrapper;
let currentProps;

describe('renders without error when data is provided', () => {
  beforeEach(() => {
    currentProps = {
      conditions: {
        name: 'Snow',
        description: 'light snow',
        icon: '13n'
      },
      humidity: 58,
      wind: {
        speed: 2.57,
        direction: 180
      },
      temperature: {
        feelsLike: -3,
        min: 1,
        max: 1,
        main: 1
      }
    };
    wrapper = setup(currentProps);
  });

  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-current-weather');
    expect(component.length).toBe(1);
  });
  test('renders icon without error', () => {
    const component = findByTestAttribute(wrapper, 'icon');
    expect(component.length).toBe(1);
  });
  test('renders temperature without error', () => {
    const component = findByTestAttribute(wrapper, 'temperature');
    expect(component.text()).toContain(currentProps.temperature.main);
  });
  test('renders wind without error', () => {
    const component = findByTestAttribute(wrapper, 'wind');
    expect(component.length).toBe(1);
  });

  test('renders humidity without error', () => {
    const component = findByTestAttribute(wrapper, 'humidity');
    expect(component.text()).toContain(currentProps.humidity);
  });

  test('renders description without error', () => {
    const component = findByTestAttribute(wrapper, 'description');
    expect(component.text()).toBe(currentProps.conditions.description);
  });

  test('renders min temperature without error', () => {
    const component = findByTestAttribute(wrapper, 'temperature-min');
    expect(component.text()).toContain(currentProps.temperature.min);
  });

  test('renders min temperature without error', () => {
    const component = findByTestAttribute(wrapper, 'temperature-max');
    expect(component.text()).toContain(currentProps.temperature.max);
  });

  test('renders min temperature without error', () => {
    const component = findByTestAttribute(wrapper, 'temperature-feels-like');
    expect(component.text()).toContain(currentProps.temperature.feelsLike);
  });
});

describe('renders without error when data is not provided', () => {
  beforeEach(() => {
    wrapper = setup({});
  });
  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-current-weather');
    expect(component.length).toBe(1);
  });
});
