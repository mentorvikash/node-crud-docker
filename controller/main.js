
// // ====== basic example

// const { Worker } = require("worker_threads")

// console.log("start my worker");

// const worker = new Worker("./worker.js", {
//     workerData: {
//         name: "vikash singh"
//     }
// })

// worker.on("message", (msg) => {
//     console.log("received message from worker", msg)
// })

// worker.on("error", (err) => {
//     console.log("got error from worker", err.message)
// })

// worker.on("exit", (code) => {
//     console.log("worker exit wtih this code", code)
// })


// ========== Heavy task worker thread

// const { Worker } = require('worker_threads')

// const worker = new Worker("./worker.js")

// console.log("worker thread started")

// worker.on("message", (result) => {
//     console.log("fibonachi series: ", result)
// })

// worker.on("error", (err) => {
//     console.log("error received from worker ", err.message)
// })

// worker.on("exit", (code) => {
//     console.log("worker exit with code: ", code)
// })


// ============= Creating dynamic (multiple workers)