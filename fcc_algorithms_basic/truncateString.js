function truncateString(str, num) {
  // Clear out that junk in your trunk

  str = String(str);
  endingDots = "...";

 if (num <= 3) {
    str = str.slice(0,num) + endingDots;
  } else if(str.length > num){
      str = str.slice(0,num-3) + endingDots;
  }

  console.log(str);
  return str;
}

truncateString("Absolutely Longer", 2);
