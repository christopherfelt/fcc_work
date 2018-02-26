function destroyer(arr,...values) {
  // Remove all the values

  for(i=0; i<values.length; i++){
    for(j=0; j<arr.length; j++){
      if(arr[j] == values[i]){
        arr = arr.filter(function(thing){
           return thing != arr[j];
        });
      }
    }
  }

  console.log(arr);

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
