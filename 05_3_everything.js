function every(array, test) {
  for (let e of array) {
    if (!test(e)) {
      return false;
    }
  }
  return true;
}

/*
function everyFromSome(array, test) {
  if (array.some(test)) {
    return false;
  }
  return true;
}
*/

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

