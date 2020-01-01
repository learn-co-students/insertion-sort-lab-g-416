//Begin by implementing a function to find the minimum in an array and remove that element.
function findMinAndRemove(array){
  let min = array[0];
  let minIndex;
  for(let i = 0; i < array.length; i++) {
      if (array[i] < min) {
          min = array[i];
          minIndex = i
      }
  }
  array.splice(minIndex, 1);
  //console.log('spliced array', array);
  return min;
}

//Move on to implement the insertion sort function, 
//and call on the minAndRemove function in its implementation.
function insertionSort(array){
  let sortedArr = [];

  const targetLength = array.length;
  while (sortedArr.length < targetLength) {
    sortedArr.push(findMinAndRemove(array));
          console.log('array', array);
          console.log('sortedArr', sortedArr);
  }

  return sortedArr;
}
