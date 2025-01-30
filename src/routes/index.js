const express = require("express");
const authRoute = require("./authroutes");

const userRoute = require("./userroutes");

const router = express.Router();

router.use("/auth", authRoute);

router.use("/user", userRoute);

module.exports = router;
