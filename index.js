function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex= i;
            // console.log(`min is ${min} min index is ${minIndex}`)
        }
    }
    array.splice(minIndex, 1);
    return min;
}

function insertionSort(array){
    let newMin;
    let sortedArray = [];
    while (array.length != 0) {
        newMin = findMinAndRemove(array);
        sortedArray.push(newMin);
    }
    return sortedArray;
}
