/**
 * @param n - First number in the array of multiples
 * @returns The class name by color
 *
 */
export default function (n: number) {
  if (n === 3) return 'green-color';
  if (n === 5) return 'red-color';
  if (n === 7) return 'blue-color';
  return 'orange-color';
}
