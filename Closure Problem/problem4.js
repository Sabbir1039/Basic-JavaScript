// Problem 4: Incorrect Use of Loops with Closures
// Solution: Be cautious when using closures within loops,
// as they can lead to unexpected behavior due to the closure
// capturing the final value of a variable after the loop has
// completed. Use immediately invoked function expressions (IIFEs)
// or block-scoped variables to create a new scope for each iteration.

// for(var i=0; i<=5; i++) { // alone use let i = 0 also a solution 
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }

// Another solution:

for(var i=0; i<=5; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    })(i);
}