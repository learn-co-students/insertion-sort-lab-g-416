
// Find minimum and remove from array
function findMinAndRemove(array){
  // Set min to first element and create minIndex
  let min = array[0]
  let minIndex

  // Iterate through array; if new element is less than minimum, set element to minimum and record index
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }

  // Remove minIndex from array
  array.splice(minIndex, 1)

  // Return minimum value
  return min
}
// Test
// let array = [2, 3, 4, 5, 6, 7]
// let array = [3, 2, 4, 5, 6, 7]
// console.log(findMinAndRemove(array))
// console.log(array) // => 2; array is now [3, 4, 5, 6, 7]


// Return sorted array
function insertionSort(array){
  // Create sorted array
  let sorted = []

  // Iterate through array; send minimum value to sorted array
  while (array.length != 0) {
    sorted.push(findMinAndRemove(array))
  }

  return sorted
}
// Test
// let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
// console.log(unsorted)
// console.log(insertionSort(unsorted)) // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]