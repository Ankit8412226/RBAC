const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const router = require("./routes/index");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log incoming requests

const port = process.env.PORT || 7001;

app.use("/api/v1", router);

dbConnect();

app.get("/", (req, res) => {
  res.send("Welcome to the RBAC system Implimented by Ankit!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
