module.exports = function getSeason(date = '') {
  if (date === '') {
    return 'Unable to determine the time of year!';
  }

  if (!date instanceof Date || {}.toString.call(date) !== {}.toString.call(new Date())) {
    throw Error();
  }

  if (date.getMonth() >= 0 && date.getMonth() < 2 || date.getMonth() === 11) {
    return 'winter';
  }

  if (date.getMonth() >= 2 && date.getMonth() < 5) {
    return 'spring';
  }

  if (date.getMonth() >= 5 && date.getMonth() < 8) {
    return 'summer';
  }

  if (date.getMonth() >= 8 && date.getMonth() <= 10) {
    return /autumn|fall/;
  }
};
