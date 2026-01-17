require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db");
require("./config/cron");

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log("✓ Database connected successfully");
    app.listen(PORT, () => {
      console.log(`✓ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Full error details:", error);
    process.exit(1);
  });