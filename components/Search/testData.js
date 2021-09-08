import { GET_CITIES } from './index';

export const items = [
  {
    country: 'GB',
    id: '8tVSKkmB_bPB8rbMkK3Dn',
    name: 'London',
    latitude: 51.5085,
    longitude: -0.1257
  },
  {
    country: 'CA',
    id: 'NKvhSrCTKSgwDmv2UJ6z5',
    name: 'London',
    latitude: 42.9834,
    longitude: -81.233
  },
  {
    country: 'US',
    id: 'FWi4ny4Un5FXpRh1WnT6b',
    name: 'London',
    latitude: 39.8865,
    longitude: -83.4483
  },
  {
    country: 'US',
    id: 'm8ZBwfg7_QnPPkghxpiZe',
    name: 'London',
    latitude: 37.129,
    longitude: -84.0833
  },
  {
    country: 'US',
    id: '_1EkYmMVmvscQGQ2hMbRu',
    name: 'London',
    latitude: 36.4761,
    longitude: -119.4432
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
