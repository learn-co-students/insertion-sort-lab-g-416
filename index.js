function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;
  array.map( (number, index) => {
    if(number < min){
      min = number;
      minIndex = index;
     // array.splice(minIndex, 1)
    }
  })
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  let newMin;
  let sortedArray = [];
  while(array.length > 0){
    newMin = findMinAndRemove(array);
    sortedArray.push(newMin)
    
  }
  console.log('array:', array, 'sortedArray:', sortedArray)
  return sortedArray;
}
