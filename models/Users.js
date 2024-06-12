const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasOne(models.Order, {
        foreignKey: "user_id",
      });
      Users.hasOne(models.Cart, {
        foreignKey: "user_id",
      });
    }
  }

  Users.init(
    {
      user_name: {
        type: DataTypes.STRING,
        field: "user_name",
      },
      user_email: {
        type: DataTypes.STRING,
        field: "user_email",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "Users",
      timestamps: true,
    }
  );

  return Users;
};
