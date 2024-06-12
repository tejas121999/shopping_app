const { Order } = require("../models");
const model = require("../models");

exports.getAllOrder = async (req, res) => {
  try {
    var order = await Order.findAll({
      where: {
        isDelete: false,
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
    if (!order) {
      return res.status(404).json({
        message: "Data not found",
      });
    } else {
      return res.status(200).json({
        data: order,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.addOrder = async (req, res) => {
  try {
    const { order } = req.body;
    await Order.create(order)
      .then((result) => {
        return res.status(200).json({
          message: "order created",
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

exports.updateOrder = async (req, res) => {
  try {
    const { order } = req.body;
    await Order.update(order, {
      where: {
        id: order.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "order updated",
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

exports.deleteOrder = async (req, res) => {
  try {
    const { order } = req.body;
    await Order.update(order, {
      where: {
        id: order.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "order delete",
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
