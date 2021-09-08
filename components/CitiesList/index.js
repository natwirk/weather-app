import * as nextRouter from 'next/router';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

export const list = [
  {
    key: 0,
    name: 'Kraków, PL',
    latitude: '50.0833',
    longitude: '19.9167'
  },
  {
    key: 1,
    name: 'Wrocław, PL',
    latitude: '51.1',
    longitude: '17.0333'
  },
  {
    key: 2,
    name: 'Warsaw, PL',
    latitude: '52.2298',
    longitude: '21.0118'
  },
  {
    key: 3,
    name: 'London, GB',
    latitude: '51.5085',
    longitude: '-0.1257'
  },
  {
    key: 4,
    name: 'New York, US',
    latitude: '40.7143',
    longitude: '-74.006'
  },
  {
    key: 5,
    name: 'Tokyo, JP',
    latitude: '35.6895',
    longitude: '139.6917'
  },
  {
    key: 6,
    name: 'Rome, IT',
    latitude: '41.8947',
    longitude: '12.4839'
  },
  {
    key: 7,
    name: 'Lisbon, PT',
    latitude: '38.7167',
    longitude: '-9.1333'
  }
];

const StyledList = styled.ul`
  list-style-type: none;
  margin: 75px auto 50px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  max-width: 100%;
  @media ${breakpoints.sm} {
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2rem;
    min-width: 500px;
    max-width: 600px;
  }
`;

const StyledItem = styled.li`
  padding: 1px;
  margin: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  display: block;
  border: 0;
  outline: 0;
  background: 0;
  cursor: pointer;
  background: transparent;
  transition: background;
  width: 100%;
  min-height: 50px;
  transition: background 100ms ease-in-out, color 200ms ease-in-out;
  border-radius: 4px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
  opacity: 0.8;
  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid;
    border-radius: 4px;
    will-change: width, height, border-radius;
    transition: width 200ms ease-in-out 100ms, height 200ms ease-in-out 100ms,
      border-radius 0ms linear 200ms;
  }
  &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
  }
  &:hover {
    background: transparent;
    transition: background 100ms ease-in-out;
    &:before,
    &:after {
      width: 20px;
      height: 20px;
      transition: width 200ms ease-in-out, height 200ms ease-in-out;
    }
    &:before {
      border-radius: 4px 2px 0 2px;
    }
    &:after {
      border-radius: 0 2px 4px 2px;
    }
  }
`;

const CitiesList = () => {
  const router = nextRouter.useRouter();

  const changePage = href => {
    router.push(`weather/${href}`);
  };
  const onClick = href => event => {
    event.preventDefault();
    changePage(href);
  };
  return (
    <StyledList data-test="component-cities-list">
      {list.map(item => (
        <StyledItem key={item.key} data-test="list-item">
          <StyledButton
            type="button"
            data-test="list-button"
            onClick={onClick(`${item.latitude}/${item.longitude}`)}
          >
            {item.name}
          </StyledButton>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default CitiesList;
