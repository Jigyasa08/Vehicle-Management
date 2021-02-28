const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (req.body.password === user.password) {
    res.send("logged in");
  } else {
    return res.status(400).send("Invalid Password");
  }
});

module.exports = router;
