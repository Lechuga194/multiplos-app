/**
 * https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
 * @param arr - Array of objects that has a numeric property by witch will be compared and sorted
 * @param property - Property name
 * @returns The array sorted
 *
 */
export const sortArrayOfObjectsByNumericProperty = (arr: Object[], property: string) => {
  return arr.sort((r1, r2) => (r1[property] > r2[property] ? 1 : r1[property] < r2[property] ? -1 : 0));
};
