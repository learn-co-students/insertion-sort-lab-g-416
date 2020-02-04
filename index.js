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
let array = [3, 2, 4, 5, 6, 7]
console.log("findMinAndRemove: ", findMinAndRemove(array))
console.log("array afterward: ", array)

function insertionSort(array){

}
