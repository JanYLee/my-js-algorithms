function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(lArr, rArr) {
  let result = [];
  while (lArr.length && rArr.length) {
    result.push(lArr[0] > rArr[0] ? rArr.shift() : lArr.shift());
  }

  while (lArr.length) {
    result.push(lArr.shift());
  }

  while (rArr.length) {
    result.push(rArr.shift());
  }
  return result;
}

export { mergeSort };
