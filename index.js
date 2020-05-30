
function findMinAndRemove(array) {
// First I find the minimum number, remove from array, find minimum number again

// now with the new array, findTheMin again,
// and remove that new minumum

// keep doing this until our unsortedArray is empty

// Push these removed elements into an empty array one by one
// and that empty array will be our sorted array.

    let min = array[0]
    let minIndex = 0

    for (let i = 0; i<array.length; i++){
        if  (array[i] < min){
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function insertionSort(array){
    let newMin
    let sortedArray = [];

    while(array.length !== 0){
        newMin = findMinAndRemove(array)
        sortedArray.push(newMin)
    }
    return sortedArray
}
