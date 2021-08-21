import { GET_CITIES } from './index';

export const items = [
  {
    country: 'GB',
    id: '8tVSKkmB_bPB8rbMkK3Dn',
    name: 'London'
  },
  {
    country: 'CA',
    id: 'NKvhSrCTKSgwDmv2UJ6z5',
    name: 'London'
  },
  {
    country: 'US',
    id: 'FWi4ny4Un5FXpRh1WnT6b',
    name: 'London'
  },
  {
    country: 'US',
    id: 'm8ZBwfg7_QnPPkghxpiZe',
    name: 'London'
  },
  {
    country: 'US',
    id: '_1EkYmMVmvscQGQ2hMbRu',
    name: 'London'
  }
];

export const mocks = [
  {
    request: {
      query: GET_CITIES,
      variables: {
        query: 'London'
      }
    },
    result: {
      data: {
        cities: {
          searchValue: 'London',
          items: items
        }
      }
    }
  }
];
