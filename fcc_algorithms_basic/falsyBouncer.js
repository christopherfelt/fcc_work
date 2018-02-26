
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(Boolean);
  console.log(arr2);

  var falsies = [false, null, 0, undefined, NaN, ""];
  arr = arr.filter(function(item){
    for(i=0; i < falsies.length;i++){
      return item != falsies[i];
      }
    }
  );
  console.log(arr);

  arr2 = arr.filter(Boolean);
  console.log(arr2);
  return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);
