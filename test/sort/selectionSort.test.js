import { selectionSort } from '../../code/algorithms/sort/selectionSort.js';

test('sort by selection [3, 7, 34, 32, 8, 3, 2, 4, 7, 9]', () => {
  expect(selectionSort([3, 7, 34, 32, 8, 3, 2, 4, 7, 9])).toEqual([2, 3, 3, 4, 7, 7, 8, 9, 32, 34])
});
