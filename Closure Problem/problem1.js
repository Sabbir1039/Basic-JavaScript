// Problem 1: Accidental Variable Shadowing
// Solution: Avoid using the same variable names in both the outer and inner functions
// to prevent accidental variable shadowing. This can be done by using distinct and
// meaningful variable names in each function.

function outerFunction() {
    var outerVariable = "Outer";

    function innerFunction() {
        var innerVariable = "Inner"; // if we use outerVariable in here then upper outerVariable will be shadowed
        console.log(outerVariable);
        console.log(innerVariable);
    }
    innerFunction();
}

outerFunction();