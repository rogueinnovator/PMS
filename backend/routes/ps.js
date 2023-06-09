const express = require("express");
const router = express.Router();
router.get("/createps", (req, res) => {
  const create = {
    name: "zara",
    rollmo: 35,
  };
  res.json(create);
});
module.exports = router;
