const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a User using: POST "/api/auth/" . Doesn't require Auth
router.post("/", (req, res) => {
  const user = User(req.body);
  user.save();
  res.json(req.body);
});

module.exports = router;
