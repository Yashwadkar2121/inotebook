const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

// ROUTE 1 :- Create a User using: POST "/api/auth/createuser". No Login Requried
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

    try {
      // Check whether the email is already exist
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email is already exists " });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = { user: { id: user.id } };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server ERROR");
    }
  }
);

// ROUTE 2 :- Authentication a User using: POST "/api/auth/login". No Login Requried
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    try {
      // Check whether the email is already exist
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Plaese try to login eith correct credentials " });
      }
      // Check whether the password is correct
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Plaese try to login eith correct credentials " });
      }

      const data = { user: { id: user.id } };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(" Internal server ERROR");
    }
  }
);

// ROUTE 3 :- GET Loggedin a User Details: POST "/api/auth/getuser".  Login Requried
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(" Internal server ERROR ");
  }
});

module.exports = router;
