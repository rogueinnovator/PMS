const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Auth = require("../models/Auth");
const User = require("../models/User");
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    try {
      let user = await Auth.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "a user with this email exist" });
      }
      // const secpass = 123;
      user = await Auth.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // await user.save();
      res.json(user);
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  }
);
router.post(
  "/user",
  [body("name").isEmpty(), body("cinc").isNumeric(), body("email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.ststus(400).json({ errors: errors.array() });
    }
    let users = await User.findOne({ email: req.body.email });
    if (users) {
      return res.status(400).json({ errors: "a user with this CNIC exist" });
    }
    try {
      users = await User.create({
        name: req.body.name,
        cnic: req.body.cnic,
        rank: req.body.rank,
      });
      res.json(users);
      console.log(users);
    } catch (error) {}
  }
);
module.exports = router;
