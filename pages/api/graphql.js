import { ApolloServer } from 'apollo-server-micro';
import typeDefs from './graphql/schema';
import OpenWeatherMapAPI from './graphql/datasource';

const resolvers = {
  Query: {
      airPollution: (_, { latitude, longitude }, { dataSources }) => dataSources.openWeatherMapAPI.getAirPollution({ latitude, longitude }),
      currentWeather: (_, { city }, { dataSources }) => dataSources.openWeatherMapAPI.getCurrentWeather({ city }),
      futureWeather: (_, { city }, { dataSources }) => dataSources.openWeatherMapAPI.getFutureWeather({ city })
    }
  };

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    openWeatherMapAPI: new OpenWeatherMapAPI()
  })
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;