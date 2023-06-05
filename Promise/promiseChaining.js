// callback Hell

function doSumthing() {
    console.log("Assume this is a slow function");
}

// function one(callback) {
//     doSumthing();
//     callback();
// }

// function two(callback) {
//     doSumthing();
//     callback();
// }

// function three(callback) {
//     doSumthing();
//     callback();
// }

// one(() => {
//     two(() => {
//         three(() => {
//             console.log("We run them all!");
//         })
//     })
// })

// solution of callback hell using promise

function one() {
    return new Promise((resolve) => {
        doSumthing();
        resolve();
    })
}

function two() {
    return new Promise((resolve) => {
        doSumthing();
        resolve();
    })
}

function three() {
    return new Promise((resolve) => {
        doSumthing();
        resolve();
    })
}

one().then(() => {
    return two();
}).then(() => {
    return three()
}).then(() => {
    console.log("we Did them all!");
})