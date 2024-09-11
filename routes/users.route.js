const express = require("express");
const router = express.Router();

const { getAllUsers, addUsers } = require("../controllers/users.controller");

router.get("/users", getAllUsers);

// GET route (retrieve all items)
router.post("/users", addUsers);

module.exports = router;
