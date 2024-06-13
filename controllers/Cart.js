const { Cart } = require("../models");
const model = require("../models");

exports.getAllCartData = async (req, res) => {
  try {
    var cart = await Cart.findAll({
      where: {
        isDelete: false,
        user_id: req.body.user_id,
      },
      include: [
        {
          model: model.Product,
          as: "product_data",
        },
        {
          model: model.Users,
          as: "user_data",
        },
      ],
    });
    if (!cart) {
      return res.status(404).json({
        message: "Data not found",
      });
    } else {
      return res.status(200).json(cart);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { cart } = req.body;
    await Cart.create(cart)
      .then((result) => {
        return res.status(200).json({
          message: "Item added to cart",
          result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          message: err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { cart } = req.body;
    await Cart.update(cart, {
      where: {
        id: cart.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "Cart updated",
          result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          message: err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

exports.deleteCartData = async (req, res) => {
  try {
    const { cart } = req.body;
    await Cart.update(cart, {
      where: {
        id: cart.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "item delete",
          result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          message: err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
