import { DataSource } from 'apollo-datasource';
import demoData from './demoData.json';

class DemoWeather extends DataSource {
  constructor() {
    super();
  }

  getData = ({ latitude, longitude }) =>
    demoData.find(el => el.latitude === latitude && el.longitude === longitude);

  getCurrentWeather = ({ latitude, longitude }) => {
    const cityData = this.getData({ latitude, longitude });
    if (cityData?.currentWeather) {
      return cityData.currentWeather;
    } else {
      throw new Error(`City does not exist in example data`);
    }
  };

  getFutureWeather = async ({ latitude, longitude }) => {
    const cityData = this.getData({ latitude, longitude });
    if (cityData.futureWeather) {
      return cityData.futureWeather;
    } else {
      throw new Error(`City does not exist in example data`);
    }
  };
}

export default DemoWeather;
