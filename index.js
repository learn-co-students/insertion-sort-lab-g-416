function findMinAndRemove(array){
    let min = array.sort((a,b)=> (a-b))[0]
    array.shift()
    
    return min
}

function insertionSort(array){
   let newMin ;

   let newArray = [];
   while(array.length !== 0){
    newMin = findMinAndRemove(array)
    newArray.push(newMin)
   }
 return newArray
}
