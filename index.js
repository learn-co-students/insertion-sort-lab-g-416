function findMinAndRemove(array){
    let min = array[0] 
    let minIndex = 0 
    array.forEach( arr =>  { 
        if (arr < min) { 
            min = arr 
            minIndex = array.indexOf(arr)
        }
    })
    array.splice(minIndex, 1)
    return min
    // for(let i = 0; i < array.length; i++) { 
//         if(array[i] < min) { 
//             min = array[i] 
//             minIndex = i 
//         }
//     }
//     array.splice(minIndex, 1)
//     return min
}

function insertionSort(array){
    let newMin
    let sorted = []
    while (array.length !== 0) { 
        let newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    return sorted
}
