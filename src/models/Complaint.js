const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Complaint = sequelize.define("Complaint", {
  complaint_type: DataTypes.STRING,
  status: DataTypes.STRING,
  status_updated_at: DataTypes.DATE,
  meta: DataTypes.JSONB,
});

module.exports = Complaint;
