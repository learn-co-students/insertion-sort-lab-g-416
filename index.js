function findMinAndRemove(array){
  let min = { value: array[0], index: 0 }
  for(let i = 1; i < array.length; i++) {
    if(array[i] < min.value) {
      min.value = array[i]
      min.index = i
    }
  }
  array.splice(min.index, 1)
  return min.value
}

function insertionSort(array){
  let newArray = []
  while(array.length > 0) {
    newArray.push(findMinAndRemove(array))
  }
  return newArray
}
