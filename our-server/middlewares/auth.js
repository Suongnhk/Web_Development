const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

function reset_cookie_and_redirect(res) {
  res.cookie("jwt", "", { maxAge: 0 });
  return res.status(401).json({ error: "You are not authorized" });
}

exports.auth = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return reset_cookie_and_redirect(res);
  }

  try {
    const claims = jwt.verify(token, process.env.JWT_SECRET);
    if (!claims) {
      return reset_cookie_and_redirect(res);
    }

    const user = await User.findOne({ _id: claims._id });
    if (!user) {
      return reset_cookie_and_redirect(res);
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    return reset_cookie_and_redirect(res);
  }
});

exports.admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ error: "You are not admin bro" });
  }
});
