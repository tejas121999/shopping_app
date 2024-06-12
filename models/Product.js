const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasOne(models.Order, {
        foreignKey: "product_id",
      });
      Product.hasOne(models.Cart, {
        foreignKey: "product_id",
      });
    }
  }

  Product.init(
    {
      product_name: {
        type: DataTypes.STRING,
        field: "product_name",
      },
      product_category: {
        type: DataTypes.STRING,
        field: "product_category",
      },
      product_price: {
        type: DataTypes.STRING,
        field: "product_price",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "product",
      modelName: "Product",
      timestamps: true,
    }
  );

  return Product;
};
