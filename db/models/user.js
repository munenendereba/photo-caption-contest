import connection from "../config/connection.js";
import Sequelize from "sequelize";

const User = connection.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
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

export default User;
