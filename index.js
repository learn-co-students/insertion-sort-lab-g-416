function findMinAndRemove(array){
    let min = array[0]
    let minIndex;
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1);
    return min;
}

function insertionSort(array){
    const newArray = []
    while(array.length > 0){
        newArray.push(findMinAndRemove(array))
    }
    return newArray;
}
