let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("3 seconds have passed");
        reject("Promise rejected!");
    }, 3000);
});

console.log("Waiting for the promise to resolve...");

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("Promise rejected:", error);
});


console.log("This message is displayed immediately");