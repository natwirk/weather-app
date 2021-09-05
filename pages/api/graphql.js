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
      ? (_, { city }, { dataSources }) =>
          dataSources.openWeatherMapAPI.getCurrentWeather({ city })
      : (_, { city }, { dataSources }) =>
          dataSources.demoWeather.getCurrentWeather({ city }),
    futureWeather: process.env.API_KEY
      ? (_, { city }, { dataSources }) =>
          dataSources.openWeatherMapAPI.getFutureWeather({ city })
      : (_, { city }, { dataSources }) =>
          dataSources.demoWeather.getFutureWeather({ city })
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
