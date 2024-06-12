const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cart");

router.post("/get", controller.getAllCartData);
router.post("/add", controller.addToCart);
router.post("/update", controller.updateCart);
router.post("/delete", controller.deleteCartData);

module.exports = router;
