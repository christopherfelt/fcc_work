function factorialize(num) {

  if(num>0){
    for(i=(num-1); i > 0; i--){
      num *= i;
    }
  } else {return 1;}


  return num;
}

factorialize(5);
