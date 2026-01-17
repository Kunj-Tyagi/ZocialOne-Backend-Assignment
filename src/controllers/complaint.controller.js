const { Complaint } = require("../models");
const { updateStatus } = require("../services/complaint.service");

exports.createComplaint = async (req, res, next) => {
  try {
    const { complaint_type, meta } = req.body;
    if (!complaint_type) {
      return res.status(400).json({ message: "complaint_type is required" });
    }

    const complaint = await Complaint.create({
      complaint_type,
      meta: meta || {},
      UserId: req.userId,
      status: "raised",
      status_updated_at: new Date(),
    });
    res.status(201).json(complaint);
  } catch (err) {
    next(err);
  }
};

exports.changeStatus = async (req, res, next) => {
  try {
    const complaint = await Complaint.findByPk(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    await updateStatus(complaint, req.body.status);
    res.json({ message: "Status updated" });
  } catch (err) {
    if (err.message === "Invalid status transition") {
      return res.status(400).json({ message: err.message });
    }
    next(err);
  }
};

exports.getMetrics = async (req, res, next) => {
  try {
    const c = await Complaint.findByPk(req.params.id);
    if (!c) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    const now = new Date();

    res.json({
      complaint_id: c.id,
      current_status: c.status,
      time_in_current_status_minutes:
        (now - c.status_updated_at) / 60000,
      total_time_minutes:
        (now - c.createdAt) / 60000,
    });
  } catch (err) {
    next(err);
  }
};
