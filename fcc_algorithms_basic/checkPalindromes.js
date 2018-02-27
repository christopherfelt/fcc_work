
function palindrome(str) {
  // Good luck!

  str = String(str);
  str = str.toLowerCase();
  str = str.replace(/\./g, '');
  str = str.replace(/_/g, '');
  str = str.replace(/ /g, '');
  str = str.replace(/,/g, '');
  str = str.replace(/-/g, '');
  str = str.replace(/\(|\)/g, '');

  console.log(str)
  palStr = str.split("");
  palStr =palStr.reverse();
  palStr = palStr.join("");

  console.log(palStr);

  if(palStr===str){
    return true;
  } else{
    return false;
  }

}



palindrome("0_0 (: /-\ :) 0-0");
