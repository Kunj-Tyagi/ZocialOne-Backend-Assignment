const User = require("./User");
const Complaint = require("./Complaint");
const Notification = require("./Notification");

// Sequelize will be imported from config/db.js
User.hasMany(Complaint);
Complaint.belongsTo(User);

User.hasMany(Notification);
Notification.belongsTo(User);

module.exports = { User, Complaint, Notification };
