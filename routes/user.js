const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { name, cnic, batch, email, ps } = req.body;
      let emp = await User.create({
        name,
        cnic,
        batch,
        email,
        ps,
      });
      const createemp = emp.save();
      res.status(201).json(createemp);
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }
);
router.get(
  "/employee/:policestationId",
  // [body("name").isEmpty(), body("cnic").isNumeric(), body("PS")],
  async (req, res) => {
    const policestationId = req.params.policestationId;
    
    try{
      const user = await User.findById(policestationId)
      .populate("policestation")
      .sort("policestation.name")
      .exec();
      res.status(200).json(user);
    }
    catch(err){
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
module.exports = router;
