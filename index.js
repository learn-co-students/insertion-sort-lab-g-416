// Find the minimum number in an array and destructively remove that element from the array and return it.
// array = [2, 3, 4, 5, 6, 7]
function findMinAndRemove(array){
   let min = array[0]
   let minIndex = 0
   array.forEach((elem, i) => {
      if (elem < min) {
         min = elem
         minIndex = i
      }
   })
   array.splice(minIndex, 1)
   return min
}
// Time Complexity / Cost of this function: "n"

// Testing out findMinAndRemove()
// let array = [3, 2, 4, 5, 6, 7]
// console.log("findMinAndRemove: ", findMinAndRemove(array))
// console.log("array afterward: ", array)
// It works! 

function insertionSort(unsorted){
   let sorted = []

   while (unsorted.length !== 0) {
      sorted.push(findMinAndRemove(unsorted))
   } // this while loop adds "n" time complexity on top of findMinAndRemove's time complexity

   return sorted
}
// insertionSort fn time complexity is n^2 

// Testing out insertionSort()
// let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
// console.log("Sorted Array: ", insertionSort(unsorted))
// It works! 
