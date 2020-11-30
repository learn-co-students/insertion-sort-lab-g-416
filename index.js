function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minIndex = i
            console.log(min)
        } 
    }
    array.splice(minIndex, 1);
    return min
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

let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
insertionSort(unsorted)