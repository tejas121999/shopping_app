const { Users } = require("../models");

exports.getAllUserData = async (req, res) => {
  try {
    var usersData = await Users.findAll({
      where: {
        isDelete: false,
      },
    });
    if (!usersData) {
      return res.status(404).json({
        message: "Data not found",
      });
    } else {
      return res.status(200).json({
        data: usersData,
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

exports.addUser = async (req, res) => {
  try {
    const { user } = req.body;
    await Users.create(user)
      .then((result) => {
        return res.status(200).json({
          message: "user created",
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

exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body;
    await Users.update(user, {
      where: {
        id: user.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "user updated",
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

exports.deleteUserData = async (req, res) => {
  try {
    const { user } = req.body;
    const updateUser = await Users.update(user, {
      where: {
        id: user.id,
      },
    });
    return res.status(200).send({
      message: "deleted",
      updateUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
