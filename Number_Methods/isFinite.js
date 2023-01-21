let num = 211e64;

let bool = Number.isFinite(num)

console.log(bool); // output = true

let huge = Infinity;

let bool2 = Number.isFinite(huge);

console.log(bool2); // output = false