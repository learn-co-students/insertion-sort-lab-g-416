function findMinAndRemove(array) {
  let min = array[0];
  let mindex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      mindex = i;
    }
  }
  array.splice(mindex, 1);
  return min;
}

function insertionSort(array) {
  let myMin;
  let sortedArray = [];
  while (array.length != 0) {
    myMin = findMinAndRemove(array);
    sortedArray.push(myMin);
  }
  return sortedArray;
}
