const express = require("express");
const { createComplaint, changeStatus, getMetrics } = require("../controllers/complaint.controller");

const router = express.Router();

router.post("/", createComplaint);
router.patch("/:id/status", changeStatus);
router.get("/:id/metrics", getMetrics);

module.exports = router;
