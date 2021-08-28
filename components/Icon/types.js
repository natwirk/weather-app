/* eslint-disable react/display-name */
import ClearIcon from './components/Clear';
import CloudsIcon from './components/Clouds';
import cloudTypes from './components/Clouds/types';
import SnowIcon from './components/Snow';
import MistIcon from './components/Mist';

const types = {
  '01d': props => <ClearIcon night={false} {...props} />,
  '01n': props => <ClearIcon night={true} {...props} />,
  '02d': props => (
    <CloudsIcon type={cloudTypes.FEW_CLOUDS} night={false} {...props} />
  ),
  '02n': props => (
    <CloudsIcon type={cloudTypes.FEW_CLOUDS} night={true} {...props} />
  ),
  '03d': props => (
    <CloudsIcon type={cloudTypes.DEFAULT} night={false} {...props} />
  ),
  '03n': props => (
    <CloudsIcon type={cloudTypes.DEFAULT} night={true} {...props} />
  ),
  '04d': props => (
    <CloudsIcon type={cloudTypes.DEFAULT} night={false} {...props} />
  ),
  '04n': props => (
    <CloudsIcon type={cloudTypes.DEFAULT} night={true} {...props} />
  ),
  '09d': props => (
    <CloudsIcon type={cloudTypes.SHOWER_RAIN} night={false} {...props} />
  ),
  '09n': props => (
    <CloudsIcon type={cloudTypes.SHOWER_RAIN} night={true} {...props} />
  ),
  '10d': props => (
    <CloudsIcon type={cloudTypes.RAIN} night={false} {...props} />
  ),
  '10n': props => <CloudsIcon type={cloudTypes.RAIN} night={true} {...props} />,
  '11d': props => (
    <CloudsIcon type={cloudTypes.THUNDERSTORM} night={false} {...props} />
  ),
  '11n': props => (
    <CloudsIcon type={cloudTypes.THUNDERSTORM} night={true} {...props} />
  ),
  '13d': props => <SnowIcon type={cloudTypes.RAIN} night={false} {...props} />,
  '13n': props => <SnowIcon type={cloudTypes.RAIN} night={true} {...props} />,
  '50d': props => <MistIcon type={cloudTypes.RAIN} night={false} {...props} />,
  '50n': props => <MistIcon type={cloudTypes.RAIN} night={true} {...props} />
};

export default types;
