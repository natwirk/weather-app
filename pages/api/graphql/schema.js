import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type AirPollution {
    id: ID!
    coordinates: Coordinates
    pm2_5: Float
    pm10: Float
  }
  type Conditions {
    name: String
    description: String
    icon: String
  }
  type Coordinates {
    latitude: Float
    longitude: Float
  }
  type CurrentWeather {
    id: ID!
    airPollution: AirPollution
    location: Location
    conditions: Conditions
    date: String
    humidity: Int
    temperature: Temperature
    wind: Wind
    time: String
  }
  type Forecast {
    conditions: Conditions
    date: String
    humidity: Int
    temperature: Temperature
    wind: Wind
    time: String
  }
  type Location {
    city: String!
    country: String
    sunrise: String
    sunset: String
  }
  type FutureWeather {
    id: ID!
    location: Location
    forecast: [Forecast]
  }
  type Temperature {
    feelsLike: Float
    main: Float
    min: Float
    max: Float
  }
  type Wind {
    direction: Int
    speed: Float
  }
  type Query {
    airPollution(latitude: Float!, longitude: Float!): AirPollution
    currentWeather(city: String!): CurrentWeather
    futureWeather(city: String!): FutureWeather
  }
`;

export default typeDefs;
