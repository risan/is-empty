import isPlainObj from "@risan/is-plain-obj";

/**
 * Check if the given value is empty or not.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */
const isEmpty = value => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (typeof value === "number") {
    return Number.isNaN(value);
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (isPlainObj(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
};

export default isEmpty;
