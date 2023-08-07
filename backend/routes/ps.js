const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const PS = require("../models/PS");
// const mongoose = require("mongoose");
router.post(
  "/createps",
  [body("name").isLength({ min: 8 }), body("add").isLength({ min: 3 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    const { name, add } = req.body;
    try {
      let ps = await PS.findOne({ name: name });
      if (ps) {
        return res.status(402).json({ error: name + ` entry already exist` });
      }
      ps = new PS({
        name,
        add,
      });
      const createdps = await ps.save();
      res.status(201).json(createdps);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
);
module.exports = router;
