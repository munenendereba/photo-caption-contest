import connection from "../config/connection.js";
import Sequelize from "sequelize";

const Image = connection.define("image", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Image;
