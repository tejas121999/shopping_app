const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product_data",
      });

      Order.belongsTo(models.Users, {
        foreignKey: "user_id",
        as: "user_data",
      });
    }
  }

  Order.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      product_id: {
        type: DataTypes.INTEGER,
        field: "product_id",
      },
      address: {
        type: DataTypes.STRING,
        field: "address",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "order",
      modelName: "Order",
      timestamps: true,
    }
  );

  return Order;
};
