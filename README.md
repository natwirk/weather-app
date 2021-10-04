# Another Weather App

This is a demo app bootstraped with Next.js created for educational purposes. The main goal was to practice creating custom graphql apis, get to know Next.js, Storybook, practice Jest & Enzyme.

## Getting started 

The app has two modes:

### Demo mode
The demo mode shows limited number of cities and their fake weather data.
To run the app in demo mode run:

```
  yarn install
  yarn dev
```

Open: http://localhost:3000 in your browser.

### Normal mode
Normal mode uses Open Weather Map API to get real weather info.

To run the app in normal mode: 
Visit https://openweathermap.org/ and create account.
Generate new api key (https://home.openweathermap.org/api_keys)

Create .env.local file with the following variables:
```
API_KEY=<your_open_weather_api_key>
NEXT_PUBLIC_HAS_API_KEY=1
```

Run

```
  yarn install
  yarn dev
```

Open: http://localhost:3000 in your browser.