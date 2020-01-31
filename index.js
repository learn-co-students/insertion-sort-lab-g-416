function findMinAndRemove(array){
    // Go through the array and find the min number.
    // How do you find the min number?
        // Math.min(...array)
    let min = Math.min(...array)
    
    // Take the min from the array.
        // Find the index within array.
    let indexOfMin = array.indexOf(min)
    
        // Slice or Splice it out.
    return array.splice(indexOfMin, 1)
}

function insertionSort(array){
    // Create an empty array.
    let sortedArray = []
    // While the array length is > 0,
    // push into sortedArray the next minimum value.
    while (array.length > 0) {
        sortedArray.push(findMinAndRemove(array))
    }
    // Because the values pushed into sortedArray are arrays themselves, flatten the array.
    return sortedArray.flat()
}

// For testing in node.
// let arr = [ 5,4,3,2,1]
// console.log(Math.min(...arr))
// console.log(arr.indexOf(3))
// console.log(arr.splice(arr.indexOf(3), 1))
// console.log(arr)