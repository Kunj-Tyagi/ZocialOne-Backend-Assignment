const { User, Complaint, Notification } = require("../models");

exports.getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    include: [
      { model: Complaint },
      { model: Notification },
    ],
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

exports.updateOnboardingStage = async (userId, stage) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }

  user.onboarding_stage = stage;
  if (stage >= 3) {
    user.onboarding_complete = true;
  }
  await user.save();

  return user;
};
