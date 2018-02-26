function titleCase(str) {

  str = String(str).split(" ");

  for(i=0; i <str.length;i++){
    word = str.shift().toLowerCase();
    word = word.split("");
    word[0] = word[0].toUpperCase();
    console.log(word);
    word = word.join("");
    str.push(word);
  }

  str = str.join(" ");

  return(str);
}

titleCase("I'm a little tea pot");
