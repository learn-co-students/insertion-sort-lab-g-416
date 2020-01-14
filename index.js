function findMinAndRemove(array) {

    let current = array[0]
    let min = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < current) {
            current = array[i]
            min = i
        }
    }
    array.splice(min, 1);
    return current;
}

function insertionSort(array) {
    let sorted = []
    let min;
    while (array.length != 0) {
        min = findMinAndRemove(array)
        sorted.push(min)
    }
    return sorted;
}
