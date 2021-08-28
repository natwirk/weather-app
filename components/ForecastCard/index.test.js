import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../test/testUtils';
import ForecastCard from './index';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<ForecastCard {...setupProps} />);
};

let wrapper;
let currentProps;

describe('renders without error when data is provided', () => {
  beforeEach(() => {
    currentProps = {
      date: '14/04/21',
      time: '23:00',
      conditions: {
        name: 'Snow',
        description: 'light snow',
        icon: '13n'
      },
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
    const component = findByTestAttribute(wrapper, 'component-forecast-card');
    expect(component.length).toBe(1);
  });

  test('renders card without error', () => {
    const component = findByTestAttribute(wrapper, 'card');
    expect(component.length).toBe(1);
  });
  test('renders date without error', () => {
    const component = findByTestAttribute(wrapper, 'date');
    expect(component.text()).toBe(currentProps.date.toString());
  });

  test('renders time without error', () => {
    const component = findByTestAttribute(wrapper, 'time');
    expect(component.text()).toBe(currentProps.time.toString());
  });
  test('renders icon without error', () => {
    const component = findByTestAttribute(wrapper, 'icon');
    expect(component.length).toBe(1);
  });
  test('renders temperature without error', () => {
    const component = findByTestAttribute(wrapper, 'temperature');
    expect(component.text()).toBe(currentProps.temperature.main.toString());
  });
  test('renders wind without error', () => {
    const component = findByTestAttribute(wrapper, 'wind');
    expect(component.length).toBe(1);
  });

  test('renders description without error', () => {
    const component = findByTestAttribute(wrapper, 'description');
    expect(component.text()).toBe(
      currentProps.conditions.description.toString()
    );
  });
  test('renders additional information on mouseover', () => {
    wrapper.simulate('mouseover');
    const component = findByTestAttribute(wrapper, 'card');
    component.simulate('mouseover');
    const additionalInformationComponent = findByTestAttribute(
      wrapper,
      'additional-information'
    );
    expect(additionalInformationComponent.length).toBe(1);
  });
});

describe('renders without error when data is not provided', () => {
  beforeEach(() => {
    wrapper = setup({});
  });
  test('renders wrapper without error', () => {
    const component = findByTestAttribute(wrapper, 'component-forecast-card');
    expect(component.length).toBe(1);
  });

  test('renders card skeleton without error', () => {
    const component = findByTestAttribute(wrapper, 'card-skeleton');
    expect(component.length).toBe(1);
  });
});
