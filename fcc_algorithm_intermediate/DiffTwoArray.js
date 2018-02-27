function diffArray(arr1, arr2) {
  // Same, same; but different.
var delete_arr = [];

for(num in arr1){
  for(num2 in arr2){
    if(arr1[num]==arr2[num2]){
        delete_arr.push(arr1[num]);
    }
  }
}


var thing;
var thing2;
for(copy in delete_arr){
  thing = arr1.indexOf(delete_arr[copy]);
  if(thing != -1){
    arr1.splice(thing, 1);
  }
  else{
    console.log("Thing = -1");
  }
  thing2 = arr2.indexOf(delete_arr[copy]);
  if(thing != -1){
    arr2.splice(thing2, 1);
  }
  else{
    console.log("Thing2 = -1");
  }
}


arr1 = arr1.concat(arr2);

console.log(arr1);

  return arr1;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
