const express = require("express");
const router = express.Router();
const controller = require("../controllers/Order");

router.post("/get", controller.getAllOrder);
router.post("/add", controller.addOrder);
router.post("/update", controller.updateOrder);
router.post("/delete", controller.deleteOrder);

module.exports = router;
