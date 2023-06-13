function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log("Making request to " + location);
        if(location === 'Google') {
            resolve("Google says Hi!");
        }
        else {
            reject("We can only talk to google");
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve("Extra Information " + response);
    })
}

// makeRequest("Facebook").then((response) => {
//     console.log("Response recived");
//     return processRequest(response);
// }).then((processResponse) => {
//     console.log(processResponse);
// }).catch((err) => {
//     console.log(err);
// })

async function doWork() {
    try {
        let reqResponse = await makeRequest("Facebook");
        console.log("Response recived");
        let proResponse = await processRequest(reqResponse);
        console.log("Processing response");
        console.log(proResponse);
    }
    catch(err) {
        console.log(err);
    }
    
}

doWork();