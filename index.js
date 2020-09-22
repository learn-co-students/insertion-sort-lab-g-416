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
   let newMin;
   while (array.length != 0){
      newMin = findMinAndRemove(array)
      sorted.push(newMin)
   }
   return sorted
}
