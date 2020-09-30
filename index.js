function findMinAndRemove(array){
    let min = array[0];
    let minI;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minI = i;
        }
    }
    array.splice(minI, 1);
    return min
}

function insertionSort(array){
    let sorted = [];
    while (array.length !== 0) {
        console.log(array);
        let min = findMinAndRemove(array)
        sorted.push(min);
    }
    return sorted;
}
