import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type AirPollution {
    id: ID!
    coordinates: Coordinates
    pm2_5: Float
    pm10: Float
    qualityIndex: Int
  }
  type City {
    id: String
    name: String
    country: String
  }
  type Cities {
    searchValue: String
    items: [City]
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
    coordinates: Coordinates
    date: String
    humidity: Int
    temperature: Temperature
    wind: Wind
    time: String
  }
  type Forecast {
    id: String
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
    feelsLike: Int
    main: Int
    min: Int
    max: Int
  }
  type Wind {
    direction: Int
    speed: Float
  }
  type Query {
    airPollution(latitude: Float!, longitude: Float!): AirPollution
    cities(query: String!): Cities
    currentWeather(city: String!): CurrentWeather
    futureWeather(city: String!): FutureWeather
  }
`;

export default typeDefs;
