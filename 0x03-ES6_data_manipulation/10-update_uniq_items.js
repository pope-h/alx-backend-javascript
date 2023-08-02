/**
 * Changes the quantity of unique grocery items to 100.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }

  return map;
}
