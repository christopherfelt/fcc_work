function mutation(arr) {

  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase().split("");
  console.log(second);
  for(i=0; i<second.length; i++){
    match = first.indexOf(second[i]);
    console.log(second[i]);
    console.log(match);
    if(match >= 0){
      match = true;
    } else {
      match = false;
      return match;
    }
  }
  console.log(match);
  return match;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
