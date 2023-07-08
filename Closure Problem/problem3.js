// Problem 3: Creating Multiple Instances of Closures with Different State
// Solution: Use a closure factory function to create multiple instances of closures,
// each with its own unique state. This can be achieved by creating a new scope for
// each instance using a higher-order function.

function incrementCounter(initialValue) {
    let value = initialValue || 0;

    return () => {
        return ++value;
    }
}

let counter1 = incrementCounter(1);
console.log(counter1());
console.log(counter1());

let counter2 = incrementCounter(10);
console.log(counter2());
console.log(counter2());
console.log(counter2());