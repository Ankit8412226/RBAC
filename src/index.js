const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log incoming requests

const port = process.env.PORT || 7001;

// Connect to MongoDB database
dbConnect();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
