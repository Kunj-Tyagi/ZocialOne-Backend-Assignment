const { User, Notification } = require("../models");

exports.processOnboardingReminders = async () => {
  const users = await User.findAll();

  for (const user of users) {
    console.log(`Checking onboarding for user ${user.id}`);
  }
};
