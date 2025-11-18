// ====== basic example

// const { parentPort, workerData } = require("worker_threads")

// parentPort.postMessage(`Hello ${workerData.name}, from worker thread`);


// ========== Heavy task worker thread

// const { parentPort } = require("worker_threads")

// function slowfibonacci(n) {
//     if (n < 1) return 1
//     return slowfibonacci(n - 1) + slowfibonacci(n - 2)

// }

// const result = slowfibonacci(41)

// parentPort.postMessage(result)

// ============= Creating dynamic (multiple workers)