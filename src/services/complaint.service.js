const transitions = require("../utils/statusTransitions");
const { Complaint } = require("../models");
const { sendStatusNotification } = require("./notification.service");

exports.updateStatus = async (complaint, newStatus) => {
  if (!transitions[complaint.status]?.includes(newStatus)) {
    throw new Error("Invalid status transition");
  }

  complaint.status = newStatus;
  complaint.status_updated_at = new Date();
  await complaint.save();

  await sendStatusNotification(complaint.UserId, newStatus);
};
