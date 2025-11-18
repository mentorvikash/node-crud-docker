const { parentPort, workerData } = require("worker_threads")

parentPort.postMessage(`Hello ${workerData.name}, from worker thread`);


