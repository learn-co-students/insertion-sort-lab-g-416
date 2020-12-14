function findMinAndRemove(array){
    let min = array[0]
    let minElementIndex = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min){
            min = array[i]
            minElementIndex = i
        }
    }
    array.splice(minElementIndex, 1)
    return min
}

function insertionSort(array){
    let newArray = []
    while (array.length > 0) {
        newArray.push(findMinAndRemove(array))
    }
    return newArray
}
