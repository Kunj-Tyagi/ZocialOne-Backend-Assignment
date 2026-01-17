const { Notification } = require("../models");

exports.sendStatusNotification = async (userId, status) => {
  const messages = {
    in_progress: "Your complaint is now in progress",
    resolved: "Your complaint has been resolved",
  };

  if (!messages[status]) return;

  console.log("EMAIL:", messages[status]);

  await Notification.create({
    UserId: userId,
    title: "Complaint Update",
    body: messages[status],
    is_sent: true,
  });
};
