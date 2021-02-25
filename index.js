function findMinAndRemove(array){
    let min = array[0]
    for(let i = 0; i < array.length; i ++) {
        if(array[i] < min) {
            min = array[i]
        }
        // array.splice(array.indexOf(min), array.indexOf(min) +1)
    }
    array.splice(array.indexOf(min), 1) // we need this line for our insertionSort function
    return min 

}

function insertionSort(array){
    let newArray = []
    while(array.length > 0) {
        newArray.push(findMinAndRemove(array))
    }
    return newArray

}
