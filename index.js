function findMinAndRemove(array){
    let min=array[0]
    let index = 0
    for (let i=1; i<array.length; i++) {
        console.log("Min=", min, " array=",array, " i=",i)
        if (array[i]<min) {
            min=array[i]
            index=i
        }
        
    }
    array.splice(index,1)
    return min
 
}

function insertionSort(array){
    let sortedArr = []
    while (array.length>0) {
        sortedArr.push(findMinAndRemove(array))
    }
    return sortedArr

}
