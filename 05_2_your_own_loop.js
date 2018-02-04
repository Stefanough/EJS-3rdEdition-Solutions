function loop(num, test, update, body) {
  while(test(num)) {
    body(num);
    num = update(num);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
