function findMinAndRemove(array){
    // find the minimum in an array and remove that element
    // [2, 3, 8, 24, 1]
    let min = array[0]
    let minIndex = 0
    for (let i=0; i<array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function insertionSort(array){
    let newArray = []
    while (array.length != 0) {
        let newMin = findMinAndRemove(array)
        newArray.push(newMin)
    }
    return newArray
}
