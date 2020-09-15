function findMinAndRemove(arr) {
  let min = arr[0];
  let minIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIdx = i;
    }
  }
  arr.splice(minIdx, 1);
  return min;
}

// console.log(findMinAndRemove([5, 3, 2, 4, 6, 7]));

function insertionSort(arr) {
  let newMin;
  let sorted = [];
  while (arr.length != 0) {
    newMin = findMinAndRemove(arr);
    sorted.push(newMin);
  }
  return sorted;
}

// console.log(
//   insertionSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7])
// );
