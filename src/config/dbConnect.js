const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB);

    console.log(
      `Connected to MongoDB at ${db.connection.host}:${db.connection.port}`
    );
  } catch (e) {
    console.error("Failed to connect to MongoDB", e);
    process.exit(1);
  }
};

module.exports = dbConnect;
