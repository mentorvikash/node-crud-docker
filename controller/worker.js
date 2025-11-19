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

// const { parentPort, workerData } = require("worker_threads")

// function fibo(n) {
//     if (n <= 1) return n;
//     return fibo(n - 1) + fibo(n - 2)
// }

// parentPort.postMessage(fibo(workerData))

// Worker thread + shared memory

// const { workerData } = require("worker_threads")

// const arr = new Int32Array(workerData)

// for (let i = 0; i < 10000000; i++) {
//     Atomics.add(arr, 0, 1)
// }


// Practical real world

// const { parentPort, workerData } = require('worker_threads')

// const { numbers } = workerData

// const result = numbers.map(num => num * 10)

// parentPort.postMessage(result)


// Fast processing to large json data and filter

// const { parentPort } = require("worker_threads")

// parentPort.on("message", ({ users }) => {
//     const adults = users.filter(el => el.age >= 18);
//     parentPort.postMessage(adults)
// })



// Passwork Hashing (bcrypt cpu-heavy)

const { parentPort } = require("worker_threads")
const bcrypt = require("bcryptjs")

parentPort.on("message", async (password) => {
    const encryptedPassword = await bcrypt.hash(password, 10);
    parentPort.postMessage(encryptedPassword)
})