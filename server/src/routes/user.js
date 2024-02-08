const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    const emailExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      res.status(409).json({ mag: "Phone already exists" });
    } else if (emailExists) {
      res.status(409).json({ mag: "Email already exists" });
    } else {
      const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.passowrd = hashPassword;
      const data = await User.create(req.body);
      if (data) res.json({ msg: "user created" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const userDetails = await User.findOne({ phoneNumber: req.body.phoneNumber });
  if (!userDetails) {
    res.status(401).json({ msg: "Invalid credentials" });
  } else {
    const isMatched = await bcrypt.compare(
      req.body.password,
      userDetails.password
    );
    if (isMatched) {
      res.json({ msg: "Login success" });
    } else {
      res.status(401).json({ msg: "Incorrect password" });
    }
  }
});

module.exports = router;
