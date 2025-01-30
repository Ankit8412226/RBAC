const express = require("express");
const authRoute = require("./authroutes");

const router = express.Router();

router.use("/auth", authRoute);

module.exports = router;
