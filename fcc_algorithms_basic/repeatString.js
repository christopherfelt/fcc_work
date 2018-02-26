
function repeatStringNumTimes(str, num) {
  // repeat after me

  str = String(str);

  bigString = "";
  if(num>0){
    for(i=0; i<num; i++){
      bigString = bigString + str;
    }
  }


  return bigString;
}

repeatStringNumTimes("abc", 3);
