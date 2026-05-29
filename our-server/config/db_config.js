const mongoose = require("mongoose");
require("dotenv/config");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Connect database successful!");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { connect }
