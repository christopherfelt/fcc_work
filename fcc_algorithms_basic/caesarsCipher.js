function rot13(str) { // LBH QVQ VG!

  str = str.split("");
  var transformedPhrase = [];
  for(i=0;i<str.length;i++){
    uni = str[i].charCodeAt();
    if(uni>=65 && uni<= 90){
      if(uni < 78){
        uni = uni + 13;
      } else {
        uni = uni - 13;
      }
      uni = String.fromCharCode(uni);
      // console.log("uni = ", uni);
      transformedPhrase.push(uni);
    } else {
      transformedPhrase.push(str[i]);
    }
  }

  transformedPhrase = transformedPhrase.join("");

  return transformedPhrase;

  // return str;

  // for(i = 62; i <91; i++){
  //   letter = String.fromCharCode(i);
  //   console.log(i,letter);
  // }

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
