import { quickSort } from '../../code/algorithms/sort/quickSort.js';

test('sort by quickSort [3, 7, 34, 32, 8, 3, 2, 4, 7, 9]', () => {
  expect(quickSort([3, 7, 34, 32, 8, 3, 2, 4, 7, 9])).toEqual([2, 3, 3, 4, 7, 7, 8, 9, 32, 34])
});
