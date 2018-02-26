function findLongestWord(str) {

  var longestWord = 0;
  var wordArray = str.split(" ");
  console.log(wordArray)

  for(i=0; i < wordArray.length; i++){
    if (wordArray[i].length > longestWord){
      longestWord = wordArray[i].length;
    }
    console.log(wordArray[i])
  }

  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
