function findMinAndRemove(array){
    let min = [array[0], 0]
    for(let i = 1; i < array.length; i++) {
        if (array[i] < min[0]) {
            min = [array[i], i]
        }

    }
    //debugger
    array.splice(min[1], 1)
    return min[0]
}

function insertionSort(array){
    let newMin;
    let sorted = [];
    while (array.length != 0) {
      newMin = findMinAndRemove(array);
      sorted.push(newMin);
    }
    return sorted;
}
