function findMinAndRemove(array){
  let min = array[0]
  for(var i = 0; i < array.length; i++) {
    if (array[i] < min ) {
      min = array[i]
    }
  }
  array.splice(array.indexOf(min), 1)
  return min;
}

function insertionSort(array){
  let removed = [];
  while (array.length > 0) {
    removed.push(findMinAndRemove(array))
  }
  return removed;
}
