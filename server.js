const express = require('express')
const mongooss = require('mongoose')
require("dotenv").config()
const cors = require('cors')
const port = process.env.port
const app = express()


// Add JSON middleware
app.use(express.json())
app.use(cors())

// MongoDB connection
mongooss.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error(err));


// Import and use user routes
const userRoutes = require("./routes/userRoutes")
app.use("/users", userRoutes) // or "/api/users" if you prefer

app.get("/", (req, res) => {
    res.send("Hay welcome to user server")
})

app.listen(port, () => {
    console.log("server is listning at " + port)
})