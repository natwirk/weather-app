import { RESTDataSource } from 'apollo-datasource-rest';
import { nanoid } from 'nanoid';

class OpenWeatherGeoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://api.openweathermap.org/geo/1.0';
  }

  getCities = async ({ query }) => {
    const response = await this.get('direct', {
      q: query,
      limit: 5,
      appid: process.env.API_KEY
    });
    return this.citiesReducer(response, query);
  };

  citiesReducer = (result, searchValue) => {
    return {
      searchValue: searchValue,
      items: result.map(city => ({
        id: nanoid(),
        name: city.name,
        country: city.country
      }))
    };
  };
}

export default OpenWeatherGeoAPI;
