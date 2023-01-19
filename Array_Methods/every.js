const age = [15, 18, 20, 13, 19, 25];
const age2 = [25, 18, 20, 23, 19, 25];

let bool = age.every((age)=> {return (age>=18)}); //return false if single element of age arr is doesn't meets the condition
let bool2 = age2.every((age)=> {return age>=18}); //return true if every elements of age arr2 is meets the condition

console.log(bool);
console.log(bool2);