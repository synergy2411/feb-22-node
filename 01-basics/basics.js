// console.log("Start")

// setTimeout(() => {
//  console.log("3 seocnds passed...")   
// }, 0);

// Promise.resolve("Promise API").then(result => console.log(result));

// console.log("End")

// Start -> End -> 3 Seconds -> Promise API

// Sync Operations
// Async Operations - running by different thread
    // - Macro Task : Promise API, queueMacrotask()
    // - Micro Task : All Timers, Callbacks etc


// const demoPromise = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({message : "RESOLVED"})
//         }, 2000)
//     })
// }

// const callPromise = async() => {
//     const response = await demoPromise()
//     console.log(response);
//     console.log("After waiting")
//     console.log("RESPONSE - ", response)
// }

// const callPromise = () => {
//     demoPromise().then(response => {
//         console.log(response);
//         return response;
//     }).then(result => {
//         console.log("After Timer")
//         console.log(result)
//     })
// }

// callPromise();