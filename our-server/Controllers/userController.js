const User = require("../models/user");

exports.findOrCreate = async (userData) => {
  try {
    let user = await User.findOne({
      email: userData.email,
      provider: userData.provider,
    });

    if (!user) {
      user = await User.create(userData);
      console.log("User created");
    } else {
      console.log("User found");
    }

    return user;
  } catch (error) {
    console.error("Error in FindOrCreate:", error);
    throw error;
  }
};
