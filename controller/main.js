
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

// const { Worker } = require("worker_threads")

// function runWorkerTask(n) {
//     return new Promise((resolve, reject) => {
//         const worker = new Worker("./worker.js", {
//             workerData: n
//         });

//         worker.on("message", resolve)
//         worker.on("error", reject)
//     })
// }


// (async () => {
//     console.time("parallel")
//     const result = await Promise.all([
//         runWorkerTask(35),
//         runWorkerTask(37),
//         runWorkerTask(41),
//     ]);
//     console.log("result", result)
//     console.timeEnd("parallel")
// })()


// worker thread + shared memory

const { Worker } = require("worker_threads")

const shared = new SharedArrayBuffer(4);
const arr = new Int32Array(shared)

const worker = new Worker("./worker.js", {
    workerData: shared
})

worker.on("exit", () => {
    console.log("Final value", arr[0])
})
