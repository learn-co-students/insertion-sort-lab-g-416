function findMinAndRemove(array){
   let min = array[0]
   let minIndex = 0
   array.forEach((a,i) => {
      if (a < min){
         min = a
         minIndex = i
      }
   })
   array.splice(minIndex, 1)
   return min
}

function insertionSort(array){
   let sorted = []
   while (array.length != 0){
      sorted.push(findMinAndRemove(array))
   }
   return sorted
}
