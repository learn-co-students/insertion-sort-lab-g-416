function findMinAndRemove(array){
  let min = array[0];
  let newIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      newIndex = i
    }
  }
  array.splice(newIndex, 1)
  return min
}

function insertionSort(array) {
  let sorted = [];
  let newMin = null;
  while(array.length !== 0) {
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted
}
