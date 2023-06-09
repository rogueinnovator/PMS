const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Auth = require("../models/Auth");
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail,
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
      res.json(user);
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  }
);
module.exports = router;
