
function reverseString(str) {
  palStr = String(str)
  palStr = palStr.split("")
  palStr =palStr.reverse()
  palStr = palStr.join("")


  return str;
}

reverseString("hello");
