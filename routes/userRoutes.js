const { Router } = require("express");
const { createUser, deleteUser, getUserById, getUsers, updateUser } = require("../controller/User")
const router = Router();

router.get("/", getUsers).post("/", createUser)

router.get("/:id", getUserById).put("/:id", updateUser).delete("/:id", deleteUser)

module.exports = router