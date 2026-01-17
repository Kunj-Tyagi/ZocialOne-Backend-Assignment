module.exports = {
  raised: ["in_progress"],
  in_progress: ["waiting_on_user", "resolved"],
  waiting_on_user: ["in_progress"],
  resolved: ["closed"],
};
