var x = 1;

function a() {
  console.log(x);
}

function b() {
  var x = 10;
  a();
}

b();
