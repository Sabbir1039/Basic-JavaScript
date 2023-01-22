// MAX
let a = [1,4,3,7,9];

let num = Math.max(a);  // doesn't work on array this way

console.log(num); // output = NaN

// Solution

let num2 = Math.max(...a); // using spread

console.log(num2); // output = 9

// example 2

let num3 = Math.max(2,4,6,78,3);

console.log(num3); // output = 78

// MIN

let num4 = Math.min(2,4,6,78,3);

console.log(num4); // output = 2
