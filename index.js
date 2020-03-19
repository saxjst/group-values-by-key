const R = require("ramda");

/** add a group of values inside a given object
 *
 * @param {Object} groups - object to store groups of values
 * @param {Object[]} objects - array of object
 * @param {String} key - key to retreive values
 * @api private
 */
const addValuesByKey = (groups, objects) => key => {
  // eslint-disable-next-line no-param-reassign
  groups[key] = R.filter(Boolean, R.pluck(key, objects));
};

/** group values of two objects by their key
 *
 * @param {Object[]} objects - array of object
 * @return {Object} object grouping values
 * @api public
 * @example
 *
 *    groupValuesByKey({a:2}, {a:3, b:1}) // => { a: [ 2, 3 ], b: [ 1 ] }
 *
 */
const groupValuesByKey = objects => {
  const keys = R.pipe(
    R.map(R.keys),
    R.flatten,
    R.uniq
  )(objects);
  const groups = R.pipe(
    // eslint-disable-next-line no-underscore-dangle
    R.pickAll(R.__, {}),
    R.map(() => [])
  )(keys);

  keys.forEach(addValuesByKey(groups, objects));

  return groups;
};

module.exports = groupValuesByKey;
