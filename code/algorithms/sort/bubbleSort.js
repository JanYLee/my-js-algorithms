function basicBubble(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  let len = arr.length;
  let isOrder;
  for (let i = 0; i < len; i++) {
    isOrder = true;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isOrder = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (isOrder) break;
  }
  return arr;
}

export { basicBubble, bubbleSort };
