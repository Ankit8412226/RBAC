const express = require("express");
const verifyToken = require("../middlewares/authmiddleware"); // Ensure the correct path to your middleware

const router = express.Router();

// Admin route (Only accessible by 'admin')
router.get("/admin", verifyToken(["admin"]), (req, res) => {
  res.json({ message: "Admin route accessed", user: req.user });
});

// User route (Accessible by 'user' and 'admin')
router.get("/user", verifyToken(["user", "admin"]), (req, res) => {
  res.json({ message: "User route accessed", user: req.user });
});

// Manager route (Accessible by 'manager' and 'admin')
router.get("/manager", verifyToken(["manager", "admin"]), (req, res) => {
  res.json({ message: "Manager route accessed", user: req.user });
});

module.exports = router;
