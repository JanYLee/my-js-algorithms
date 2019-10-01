function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let insert = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > insert) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = insert;
  }
  return arr;
}

export { insertionSort };
