function convertToRoman(num) {

num = num.toString().split('');

num_size = num.length - 1;
mult10 = Math.pow(10, num_size);



var mult_array = [];
var e;
var word = "";
for(i=0; i < num.length; i++){
  e = parseInt(num[i]);
  console.log(e,mult10);

  if(mult10 >= 1000){
    if(e<4){
      for(j=0; j<e; j++){
        word += "M";
      }
    }
  }

  else if(mult10 >= 100){
    if(e<4){
      for(k=0; k<e; k++){
        word += "C";
      }
    } else if(e==4){
      word = "CD";
    } else if(e<9) {
      word = "D";
      g = e - 5;
      for(l=0; l<g; l++){
        word += "C";
      }
    } else {
      word = "CM";
    }
  }

  else if(mult10 >= 10){
    if(e<4){
      for(a=0; a<e; a++){
        word += "X";
      }
    } else if(e==4){
      word = "XL";
    } else if(e<9) {
      word = "L";
      g = e - 5;
      for(b=0; b<g; b++){
        word += "X";
      }
    } else {
      word = "XC"
    }
  }
  else if(mult10 < 10){
    if(e<4){
      for(c=0; c<e; c++){
        word += "I";
      }
    } else if(e==4){
      word = "IV";
    } else if(e<9) {
      word = "V";
      g = e - 5;
      for(d=0; d<g; d++){
        word += "I";
      }
    } else {
      word = "IX"
    }
  }
console.log(word);
mult_array.push(word);
word = ""
mult10/=10;


}


mult_array = mult_array.join('');

console.log(mult_array);

 return mult_array;
}

convertToRoman(3999);
