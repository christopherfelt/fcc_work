function slasher(arr, howMany) {
  // it doesn't always pay to be first

  console.log(arr);
  arr = arr.slice(howMany);
  console.log(arr);
  return arr;
}

slasher([1, 2, 3], 2);
