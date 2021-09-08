import { ApolloServer } from 'apollo-server-micro';
import typeDefs from './graphql/schema';
import OpenWeatherMapAPI from './graphql/weather/datasource';
import OpenWeatherMapGeoAPI from './graphql/geo/datasource';
import DemoWeather from './graphql/demo/weather/datasource';

const resolvers = {
  Query: {
    airQuality: (_, { latitude, longitude }, { dataSources }) =>
      dataSources.openWeatherMapAPI.getAirQuality({ latitude, longitude }),
    cities: (_, { query }, { dataSources }) =>
      dataSources.openWeatherMapGeoAPI.getCities({ query }),
    currentWeather: process.env.API_KEY
      ? (_, { latitude, longitude }, { dataSources }) =>
          dataSources.openWeatherMapAPI.getCurrentWeather({
            latitude,
            longitude
          })
      : (_, { latitude, longitude }, { dataSources }) =>
          dataSources.demoWeather.getCurrentWeather({ latitude, longitude }),
    futureWeather: process.env.API_KEY
      ? (_, { latitude, longitude }, { dataSources }) =>
          dataSources.openWeatherMapAPI.getFutureWeather({
            latitude,
            longitude
          })
      : (_, { latitude, longitude }, { dataSources }) =>
          dataSources.demoWeather.getFutureWeather({ latitude, longitude })
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    demoWeather: new DemoWeather(),
    openWeatherMapAPI: new OpenWeatherMapAPI(),
    openWeatherMapGeoAPI: new OpenWeatherMapGeoAPI()
  })
});

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
