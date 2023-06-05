// Using normal callback function
// function doJimWork() {
//     return true;
// }

// function handleJimWork(successCallback, errorCallback) {
//     // a slow function that returns boolean
//     const success = doJimWork();

//     if(success) {
//         successCallback();
//     }
//     else {
//         errorCallback();
//     }
// }

// handleJimWork(() => {
//     console.log("Success");
// }, () => {
//     console.log("Error");
// })

// Using Promise

function doJimWork() {
    return false;
}

function handleJimWork() {
    return new Promise((resolve, reject) => {
        const success = doJimWork()

        if(success) {
            resolve("problem resolved");
        }
        else {
            reject("problem reject");
        }
    })
}

const promise = handleJimWork()

promise.then((msg) => {
    console.log("Success "+ msg);
}).catch((msg) => {
    console.error("Error "+ msg);
})
