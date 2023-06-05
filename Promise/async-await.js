async function operation1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 1000);
    });

    let result = await promise;
    console.log(result);
    console.log("wait until promise is resolved!")
}

operation1();

console.log("Hello There");

