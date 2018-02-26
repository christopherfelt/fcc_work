
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var iteration = 0;
  var chunkArray = [];
  var chunkyChunksArray = [];
  for(i=0; i<arr.length; i++){
    console.log(arr[i]);
    if(iteration < size){
      chunkArray.push(arr[i]);
      console.log(chunkArray);
      iteration++;

    }else{
      chunkyChunksArray.push(chunkArray);
      chunkArray = [];
      iteration = 0;
      chunkArray.push(arr[i]);

    }

  }
  chunkyChunksArray.push(chunkArray);

  console.log(chunkyChunksArray);
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
