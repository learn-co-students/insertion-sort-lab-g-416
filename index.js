function findMinAndRemove(array){
    let minVal = array[0]
    let minIndex
    for(let i = 0; i < array.length; i++){
        if(minVal > array[i]){
            minVal = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return minVal
}

function insertionSort(array){
    let sorted = []
    while(array.length !== 0){
        sorted.push(findMinAndRemove(array))
    }
    return sorted
}
