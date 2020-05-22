function findMinAndRemove(array){
    let min = array[0]; // if none of the other elements in the array are minimum, then this is what is returned.
    let minIndex = 0; // again, if no other elements are min, this is what is used in the splicer on line 10.
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) { // if the element is less than the original minimum,
        min = array[i]; // then we set the variable 'min' equal to the new minimum.
        minIndex = i; // we also set the index so that we can splice 
      }
    }
    array.splice(minIndex, 1); // splice (destructively) modifies the original array.
    return min;
  
}

function insertionSort(array){
    let newMin;
    let sorted = [];
    while (array.length != 0) { // while the argument array's length is not equal to zero, keep running this condition.
      newMin = findMinAndRemove(array); // findMinAndRemove will destructively modify the original array and it will then
      sorted.push(newMin); // sort and push the elements into the sorted variable array.
    }
    return sorted;
}