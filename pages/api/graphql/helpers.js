/**
 * Adds zero to string if less than ten
 * @param {Number} value
 * @returns {String}
 */
const _prepareValue = value => (value < 10 ? '0' + value : value);

/**
 * Gets formatted date from a timestamp in local time
 * @param {String} timestamp
 * @param {Number} timezone
 * @returns {String}
 */
export const formatDate = (timestamp, timezone) => {
  const date = new Date(timestamp * 1000 + timezone);
  return `${_prepareValue(date.getUTCDate())}/${_prepareValue(
    date.getUTCMonth() + 1
  )}/${date.getUTCFullYear()}`;
};

/**
 * Gets formatted time from a timestamp in local time
 * @param {String} timestamp
 * @param {Number} timezone
 * @returns {String}
 */
export const formatTime = (timestamp, timezone) => {
  const date = new Date((timestamp + timezone) * 1000);
  return `${date.getUTCHours()}:${_prepareValue(date.getUTCMinutes())}`;
};
