import { configure } from 'enzyme';
/* Unofficial adapter until an official is developed */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
  adapter: new Adapter()
});
