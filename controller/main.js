const { Worker } = require("worker_threads")

console.log("start my worker");

const worker = new Worker("./worker.js", {
    workerData: {
        name: "vikash singh"
    }
})

worker.on("message", (msg) => {
    console.log("received message from workder", msg)
})

worker.on("error", (err) => {
    console.log("got error from worker", err.message)
})

worker.on("exit", (code) => {
    console.log("worker exit wtih this code", code)
})

