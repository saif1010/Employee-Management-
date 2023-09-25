const { createUser, getUsers, getUserById, updateUser, deleteEmployee } = require('../controllers/userController');
const express = require("express")

const router = express.Router()

router.post("/employee",createUser)
router.get("/employee", getUsers)
router.get("/employee/:userId", getUserById)
router.patch("/employee/:userId", updateUser)
router.delete("/employee/:userId", deleteEmployee)


module.exports = router;
