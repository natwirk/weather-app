import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../test/testUtils';
import ForecastCards from './index';
import testData from './testData';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<ForecastCards {...setupProps} />);
};

let currentProps, wrapper;

describe('renders without error when data is not provided', () => {
  beforeEach(() => {
    currentProps = {};
    wrapper = setup(currentProps);
  });

  test('renders container', () => {
    const component = findByTestAttribute(wrapper, 'component-forecast-cards');
    expect(component.length).toBe(1);
  });
  test('renders 8 skeleton cards', () => {
    const container = findByTestAttribute(wrapper, 'component-forecast-cards');
    const cards = findByTestAttribute(
      container.dive(),
      'forecast-skeleton-card'
    );
    expect(cards.length).toBe(8);
  });
});
describe('renders without error when data is provided', () => {
  beforeEach(() => {
    currentProps = {
      forecast: testData
    };
    wrapper = setup(currentProps);
  });

  test('renders container', () => {
    const component = findByTestAttribute(wrapper, 'component-forecast-cards');
    expect(component.length).toBe(1);
  });
  test('renders all cards', () => {
    const container = findByTestAttribute(wrapper, 'component-forecast-cards');
    const cards = findByTestAttribute(container.dive(), 'forecast-card');
    expect(cards.length).toBe(currentProps.forecast.length);
  });
});
