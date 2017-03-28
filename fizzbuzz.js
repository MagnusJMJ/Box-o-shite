for (i = 1; i < 101; i++) {
  var fb;
  if (i % 3 == 0) {
    fb += 'Fizz';
  }
  if (i % 5 == 0) {
    fb += 'Buzz';
  }
  if (fb == '') {
    console.log(i);
  } else {
    console.log(fb || i);
  }
}
