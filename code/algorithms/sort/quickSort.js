function sort(arr, left, right) {
  if (left < right) {
    let pivotIndex = right;
    let partitionIndex = partition(arr, pivotIndex, left, right);
    sort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1);
    sort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right);
  }
}

function partition(arr, pivotIndex, left, right) {
  const pivot = arr[pivotIndex];
  let start = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      start++;
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return start;
}

function quickSort(arr) {
  sort(arr, 0, arr.length - 1);
  return arr;
}

export { quickSort };
