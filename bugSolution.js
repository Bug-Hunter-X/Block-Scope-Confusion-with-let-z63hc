function myFunc() {
  let x = 10;
  if (true) {
    x = 20; // No redeclaration, modifies the outer x
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}

//Alternative:
function myFunc2() {
  let x = 10;
  if (true) {
    let y = 20; //Different variable name
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
}