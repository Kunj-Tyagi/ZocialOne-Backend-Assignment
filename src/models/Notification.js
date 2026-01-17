const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Notification = sequelize.define("Notification", {
  title: DataTypes.STRING,
  body: DataTypes.TEXT,
  is_sent: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Notification;
