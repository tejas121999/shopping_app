const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product_data",
      });

      Cart.belongsTo(models.Users, {
        foreignKey: "user_id",
        as: "user_data",
      });
    }
  }

  Cart.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      product_id: {
        type: DataTypes.INTEGER,
        field: "product_id",
      },
      quantity: {
        type: DataTypes.STRING,
        field: "quantity",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "cart",
      modelName: "Cart",
      timestamps: true,
    }
  );

  return Cart;
};
