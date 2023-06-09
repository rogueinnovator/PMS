const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.get(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);
router.get(
  "/user:policestationId",
  [body("name").isEmpty, body("cinic").isNumeric, body("PS")],
  (req, res) => {
    const policestationId = req.params.policestationId;
    User.find({ policestation: policestationId })
      .populate("policestation")
      .sort("policestation.name")
      .exec((err, employees) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Internal server error" });
        } else {
          res.status(200).json(employees);
        }
      });
  }
);
module.exports = router;
