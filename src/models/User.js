const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  onboarding_stage: { type: DataTypes.INTEGER, defaultValue: 0 },
  onboarding_complete: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = User;
