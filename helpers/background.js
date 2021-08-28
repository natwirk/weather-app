const backgroundHelper = icon => {
  switch (icon) {
    case '01d':
      return 'lightClear';
    case '01n':
      return 'darkClear';
    case '02d':
    case '03d':
    case '04d':
    case '09d':
      return 'lightDefault';
    case '02n':
    case '03n':
    case '04n':
    case '09n':
      return 'darkDefault';
    case '10d':
    case '11d':
    case '13d':
    case '50d':
      return 'lightGray';
    case '10n':
    case '11n':
    case '13n':
    case '50n':
      return 'darkGray';
  }
};

export default backgroundHelper;
