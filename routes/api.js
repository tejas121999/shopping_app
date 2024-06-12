const express = require("express");
const router = express.Router();
const user = require("./User");
const order = require("./Order");
const product = require("./Product");
const cart = require("./Cart");

router.use("/user", user);
router.use("/order", order);
router.use("/product", product);
router.use("/cart", cart);

module.exports = router;
