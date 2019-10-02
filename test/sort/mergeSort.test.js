import { mergeSort } from '../../code/algorithms/sort/mergeSort.js';

test('sort by mergeSort [3, 7, 34, 32, 8, 3, 2, 4, 7, 9]', () => {
  expect(mergeSort([3, 7, 34, 32, 8, 3, 2, 4, 7, 9])).toEqual([2, 3, 3, 4, 7, 7, 8, 9, 32, 34])
});
