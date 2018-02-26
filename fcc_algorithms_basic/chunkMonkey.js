
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var begin = 0;
  var chunk = [];
  var chunkArray = [];
  for(i=0; i<arr.length;i+=size){
    chunk = arr.slice(begin,begin+size);
    chunkArray.push(chunk);
    chunk = [];
    begin = begin+size;
  }

  console.log(chunkArray);


  return chunkArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
