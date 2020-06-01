/* function findMinAndRemove(array, sorted = []){
    console.log(array)
    if(array.length === 1) {
        return sorted[0];
    }
 
    if(array.length > 1) {
        let min = Math.min(...array);
        sorted.push(min);
        return findMinAndRemove( array.splice(array.indexOf(min), 1), sorted);
    }
}
 */

 function findMinAndRemove(array) {

    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
        min = array[i];
        minIndex = i;
        }
    }
    array.splice(minIndex, 1);
    return min;
 }

let array = [2, 3, 4, 5, 6, 7, 2];
findMinAndRemove(array);

function insertionSort(array){
    let sorted = [];
    
     while(array.length ) {
       let min = findMinAndRemove(array);

       sorted.push(min);
      // console.log(sorted)
      // console.log(array)
    }

    return sorted 

 

}
let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
console.log(insertionSort(unsorted));