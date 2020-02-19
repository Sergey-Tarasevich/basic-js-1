const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let parsedVal;
  if (typeof sampleActivity === 'string') {
    parsedVal = parseFloat(sampleActivity);
  } else return false;

  if (parsedVal > 0 && parsedVal < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / parsedVal) * HALF_LIFE_PERIOD / 0.693);
  }
  return false;
};
