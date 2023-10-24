import connection from "../config/connection.js";
import Sequelize from "sequelize";

const User = connection.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM,
    values: ["active", "inactive", "disabled"],
    allowNull: false,
    defaultValue: "disabled",
  },
});
