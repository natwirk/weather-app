import { MockedProvider } from '@apollo/client/testing';
import Search from './index';
import { mocks } from './testData';

export default {
  title: 'Search',
  component: Search
};

export const Default = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <Search />
  </MockedProvider>
);
