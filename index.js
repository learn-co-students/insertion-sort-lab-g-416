function findMinAndRemove(array){
  let newMin = array[0]
  let minIndex = 0
  for (let i = 1; i < array.length; i++) {
    if (array[i] < newMin) {
      newMin = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1) // remove element in place at index where min was
  return newMin
}

function insertionSort(array){
  let unsorted = array
  let sorted = []
  while (unsorted.length > 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
} 
