const express = require("express");
const { getDetails } = require("../controllers/user.controller");

const router = express.Router();

router.get("/details", getDetails);

module.exports = router;
