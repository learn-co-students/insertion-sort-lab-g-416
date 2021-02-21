function findMinAndRemove(array){
  let minElement = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if(array[i] < minElement) {
      minElement = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return minElement
}

function insertionSort(array){
  let minimum
  let sortedArray = []
  while (array.length != 0) {
    minimum = findMinAndRemove(array)
    sortedArray.push(minimum)
  }
  return sortedArray
}
