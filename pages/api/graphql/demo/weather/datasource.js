import { DataSource } from 'apollo-datasource';
import demoData from './demoData.json';

class DemoWeather extends DataSource {
  constructor() {
    super();
  }

  getCurrentWeather = ({ city }) => {
    console.log(city);
    const cityData = demoData.find(
      el => el.city.toLowerCase() === city.toLowerCase()
    );
    if (cityData?.currentWeather) {
      return cityData.currentWeather;
    } else {
      throw new Error(`City does not exist in example data`);
    }
  };

  getFutureWeather = async ({ city }) => {
    const cityData = demoData.find(el => el.city === city);
    if (cityData.futureWeather) {
      return cityData.futureWeather;
    } else {
      throw new Error(`City does not exist in example data`);
    }
  };
}

export default DemoWeather;
