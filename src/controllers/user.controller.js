const { User, Complaint } = require("../models");

exports.getDetails = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId, { include: Complaint });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.createdAt,
      onboarding_stage: user.onboarding_stage,
      complaints_count: user.Complaints.length,
      onboarding_complete: user.onboarding_complete,
    });
  } catch (err) {
    next(err);
  }
};
