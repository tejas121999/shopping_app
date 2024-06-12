const express = require("express");
const router = express.Router();
const controller = require("../controllers/User");

router.post("/get", controller.getAllUserData);
router.post("/add", controller.addUser);
router.post("/update", controller.updateUser);
router.post("/delete", controller.deleteUserData);

module.exports = router;
