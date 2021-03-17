function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  let sorted = []
  let min

  while (array.length) {
    min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted
}

findMinAndRemove([3, 2, 4, 5, 6, 7])