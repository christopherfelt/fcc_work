function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  arr = arr.sort(function(a,b){
    return a - b;
  });
  for(i=0; i<arr.length; i++){
    console.log(arr[i]);
    if(arr[i] < num){
      console.log("smaller");
    }
     else if(arr[i]>=num){
      indexCall = i;
      console.log(indexCall);
      return i ;
    }
  }
  console.log(i);
  return i;
}

getIndexToIns([2, 5, 10], 15);
