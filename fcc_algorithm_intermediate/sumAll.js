function sumAll(arr) {
  var largest_num = Math.max.apply(Math, arr);
  console.log("largest_num = ", largest_num)
  var smallest_num;
  var arr_index = arr.indexOf(largest_num);
  console.log("arr_index = ", arr_index);
  console.log("arr = ", arr);
  arr = arr.splice(arr_index-=1, 1);
  console.log("arr = ", arr);
  smallest_num = arr[0];
  console.log(smallest_num);
  var new_arr = [];
  for(i=smallest_num; i <= largest_num; i++ ){
    new_arr.push(i);
  }

  console.log(new_arr);

  var total = 0;
  for(var i in new_arr){
    total += new_arr[i];
  }
  console.log(total);
  return total;

}
sumAll([1, 4]);
