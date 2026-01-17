const cron = require("node-cron");
const { processOnboardingReminders } = require("../services/onboarding.service");

cron.schedule("*/10 * * * *", processOnboardingReminders);

exports.processOnboardingReminders = async () => {
  const incompleteUsers = await User.findAll({
    where: { onboarding_complete: false }
  });

  for (const user of incompleteUsers) {
    // Send email reminder
    await sendEmailReminder(user.email);
    
    // To create notification
    await Notification.create({
      UserId: user.id,
      title: "Complete Your Onboarding",
      body: "Please finish setting up your account"
    });
    
    console.log(`Reminder sent to user ${user.id}`);
  }
};
