const arr = ["one", "two", "three", "four", "five", "four", "six", "two"];

const a = arr.lastIndexOf("two");
const b = arr.lastIndexOf(/Two/i); // regex doesn't work in lastIndexOf()

console.log(a);
console.log(b);
