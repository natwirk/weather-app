import { RESTDataSource } from 'apollo-datasource-rest';
import { formatDate, formatTime } from '../helpers';
import { nanoid } from 'nanoid';

class OpenWeatherMapAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://api.openweathermap.org/data/2.5';
  }

  getAirQuality = async ({ latitude, longitude }) => {
    const response = await this.get('air_pollution', {
      lat: latitude,
      lon: longitude,
      appid: process.env.API_KEY
    });
    return this.airQualityReducer(response, latitude, longitude);
  };

  airQualityReducer = (result, latitude, longitude) => {
    return {
      id: `${result.list[0].dt}_${latitude}_${longitude}`,
      coordinates: {
        latitude,
        longitude
      },
      pm2_5: result.list[0].components.pm2_5,
      pm10: result.list[0].components.pm10,
      qualityIndex: result.list[0].main.aqi
    };
  };

  getCurrentWeather = async ({ city }) => {
    const response = await this.get('weather', {
      q: city,
      units: 'metric',
      appid: process.env.API_KEY
    });
    return this.currentWeatherReducer(response, city);
  };

  currentWeatherReducer = (result, city) => {
    const {
      coord: { lat: latitude, lon: longitude },
      timezone
    } = result;
    return {
      id: result.id || 0,
      airPollution: this.getAirQuality({
        latitude,
        longitude
      }),
      coordinates: {
        latitude,
        longitude
      },
      location: {
        city: result.name ? result.name : city,
        country: result.sys.country,
        sunrise: formatTime(result.sys.sunrise, timezone),
        sunset: formatTime(result.sys.sunset, timezone)
      },
      conditions: {
        name: result.weather[0].main,
        description: result.weather[0].description,
        icon: result.weather[0].icon
      },
      date: formatDate(result.dt, timezone),
      humidity: result.main.humidity,
      temperature: {
        main: Math.round(result.main.temp),
        min: Math.round(result.main.temp_min),
        max: Math.round(result.main.temp_max),
        feelsLike: Math.round(result.main.feels_like)
      },
      wind: {
        direction: result.wind.deg,
        speed: result.wind.speed
      },
      time: formatTime(result.dt, timezone)
    };
  };

  getFutureWeather = async ({ city }) => {
    const response = await this.get('forecast', {
      q: city,
      units: 'metric',
      appid: process.env.API_KEY
    });
    return this.futureWeatherReducer(response, city);
  };

  futureWeatherReducer = (result, city) => {
    const {
      city: { timezone }
    } = result;
    return {
      id: result.id || 0,
      location: {
        city: result.city.name ? result.city.name : city,
        country: result.city.country,
        sunrise: formatTime(result.city.sunrise, timezone),
        sunset: formatTime(result.city.sunset, timezone)
      },
      forecast: result.list.map(element => ({
        id: nanoid(),
        conditions: {
          name: element.weather[0].main,
          description: element.weather[0].description,
          icon: element.weather[0].icon
        },
        date: formatDate(element.dt, timezone),
        humidity: element.main.humidity,
        temperature: {
          main: Math.round(element.main.temp),
          min: Math.round(element.main.temp_min),
          max: Math.round(element.main.temp_max),
          feelsLike: Math.round(element.main.feels_like)
        },
        wind: {
          direction: element.wind.deg,
          speed: element.wind.speed
        },
        time: formatTime(element.dt, timezone)
      }))
    };
  };
}

export default OpenWeatherMapAPI;
