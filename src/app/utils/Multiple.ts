/**
 * @param n - The main number
 * @param multiples - Array of possible multiples of the number n
 * @returns The array of multiples of n
 *
 */
export default function (n: number, multiples: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < multiples.length; i++) {
    if (n % multiples[i] === 0) {
      result.push(multiples[i]);
    }
  }
  return result;
}
