import isPlainObj from "@risan/is-plain-obj";

const isString = value => typeof value === "string";

const isNumber = value => typeof value === "number";

const isArray = value => Array.isArray(value);

const isMapOrSet = value => value instanceof Map || value instanceof Set;

/**
 * Check if the given value is empty or not.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */
const isEmpty = value => {
  let empty = false;

  if (value === null || value === undefined) {
    empty = true;
  } else if (isString(value)) {
    empty = value.trim().length === 0;
  } else if (isNumber(value)) {
    empty = Number.isNaN(value);
  } else if (isArray(value)) {
    empty = value.length === 0;
  } else if (isMapOrSet(value)) {
    empty = value.size === 0;
  } else if (isPlainObj(value)) {
    empty = Object.keys(value).length === 0;
  }

  return empty;
};

export default isEmpty;
