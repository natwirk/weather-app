import { ApolloServer } from 'apollo-server-micro';
import typeDefs from './graphql/schema';
import OpenWeatherMapAPI from './graphql/weather/datasource';
import OpenWeatherGeoAPI from './graphql/geo/datasource';

const resolvers = {
  Query: {
    airPollution: (_, { latitude, longitude }, { dataSources }) =>
      dataSources.openWeatherMapAPI.getAirQuality({ latitude, longitude }),
    cities: (_, { query }, { dataSources }) =>
      dataSources.openWeatherGeoAPI.getCities({ query }),
    currentWeather: (_, { city }, { dataSources }) =>
      dataSources.openWeatherMapAPI.getCurrentWeather({ city }),
    futureWeather: (_, { city }, { dataSources }) =>
      dataSources.openWeatherMapAPI.getFutureWeather({ city })
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    openWeatherMapAPI: new OpenWeatherMapAPI(),
    openWeatherGeoAPI: new OpenWeatherGeoAPI()
  })
});

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
