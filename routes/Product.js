const express = require("express");
const router = express.Router();
const controller = require("../controllers/Product");

router.post("/get", controller.getAllProduct);
router.post("/add", controller.addProduct);
router.post("/update", controller.updateProduct);
router.post("/delete", controller.deleteProduct);

module.exports = router;
