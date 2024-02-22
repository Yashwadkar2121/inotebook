const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Create a User using: POST "/api/auth/createuser". No Login Requried
router.post(
  "/createuser",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "password atleast 6 characters").isLength({ min: 6 }),
    body("name", "Enter a valid Name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the email is already exist
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email is already exists " });
      }
      // Create a new user
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.json({ user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
