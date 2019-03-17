//goal return an index where the sum of the numbers to the left of the index and the right of the index
// are equal, if no index meets the condition then return -1

//ex: findEvenIndex([1,2,3,4,3,2,1]) == 4 , bc [1, 2, 3] = 6, and [3, 2, 1] = 6

function sumArray(arr){
  var sum = 0;
  for(i = 0; i < arr.length; i++){
    sum += arr[i];
    // console.log(arr[i]);
    // console.log(sum);
  }
  return sum;
}

function findEvenIndex(arr){
  for(i = 0; i < arr.length; i++){
    var arrayLeftSideSum = sumArray(arr.slice(0, i));
    var arrayRightSideSum = sumArray(arr.slice(i + 1));
    // console.log(arrayLeftSide);
    // console.log(sumArray(arrayLeftSide));
    console.log(arr.length);
    console.log(i);
    // if(arrayLeftSideSum == arrayRightSideSum){
    //   console.log(i);
    // }
  }
  // return -1;
}

findEvenIndex([1,2,3,4,3,2,1]);