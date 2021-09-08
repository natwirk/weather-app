import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type AirQuality {
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
    latitude: Float
    longitude: Float
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
    airQuality: AirQuality
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
    airQuality(latitude: Float!, longitude: Float!): AirQuality
    cities(query: String!): Cities
    currentWeather(latitude: String!, longitude: String!): CurrentWeather
    futureWeather(latitude: String!, longitude: String!): FutureWeather
  }
`;

export default typeDefs;
