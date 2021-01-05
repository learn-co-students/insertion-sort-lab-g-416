function findMinAndRemove(array){
  let min = array[0], ind = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i] < min){
      ind = i
      min = array[i]
    }
  }
  array.splice(ind, 1)
  return min
}

function insertionSort(array){
  let sorted = [];
  while (array.length !== 0) {
    sorted.push(findMinAndRemove(array));
  }
  return sorted;
}
