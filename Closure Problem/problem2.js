// Problem 2: Memory Leaks
// Solution: Be mindful of memory usage when using closures,
// especially in long-running applications.
// Avoid creating unnecessary closures or
// holding references to objects that are no longer needed.
// Make sure to explicitly release closures or remove
// references to allow the garbage collector to free up memory.

function heavyOperation() {
    var largeData = []; // Assume this array contains a large amount of data
  
    return function() {
      // Use largeData here
    };
}
  
// Release the closure when it is no longer needed
var releaseClosure = heavyOperation();
releaseClosure = null; // Allow the garbage collector to free up memory
  