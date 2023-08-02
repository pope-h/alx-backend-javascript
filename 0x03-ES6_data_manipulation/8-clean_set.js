/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns {String}
 */

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const filteredSet = [...set].filter((value) => value.startsWith(startString));

  return filteredSet.join('-');
}
