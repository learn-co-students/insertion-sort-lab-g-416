function findMinAndRemove(array){
    let min = array[0]//12//10//9//1
    let minIdx = 0;//1//2//4
    for (let i = 0; i < array.length;i++){
        if (array[i] < min){
            min = array[i]
            minIdx = i
        }
    }
    array.splice(minIdx, 1)
    return min
}
//[12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
function insertionSort(array){
    let newMin;
    let sorted = [];
    while (array.length != 0){
        newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    return sorted;
}
