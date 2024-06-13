const { Product } = require("../models");

exports.getAllProduct = async (req, res) => {
  try {
    var product = await Product.findAll({
      where: {
        isDelete: false,
      },
    });
    if (!product) {
      return res.status(404).json({
        message: "Data not found",
      });
    } else {
      return res.status(200).json(product);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { product } = req.body;
    await Product.create(product)
      .then((result) => {
        return res.status(200).json({
          message: "Product created",
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

exports.updateProduct = async (req, res) => {
  try {
    const { product } = req.body;
    await Product.update(product, {
      where: {
        id: product.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "Product updated",
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

exports.deleteProduct = async (req, res) => {
  try {
    const { product } = req.body;
    await Product.update(product, {
      where: {
        id: product.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "Product deleted",
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
