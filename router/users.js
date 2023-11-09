const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/users");

router.get("/users", usercontroller.index);

router.post("/user", usercontroller.store);

router.put("/user/:id", usercontroller.update);

router.delete("/user/:id");

module.exports = router;