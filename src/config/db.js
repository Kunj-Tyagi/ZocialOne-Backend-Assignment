const { Sequelize } = require("sequelize");

const requiredVars = ["DB_NAME", "DB_USER", "DB_PASSWORD"];
const missing = requiredVars.filter((key) => !process.env[key]);

if (missing.length) {
  throw new Error(`Missing required database env vars: ${missing.join(", ")}`);
}

console.log("Using PostgreSQL database");
console.log(`Connection details: ${process.env.DB_USER}@${process.env.DB_HOST || "localhost"}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME}`);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
  }
);

module.exports = sequelize;
