const Review = require("../models/review");
const dao = require("../utils/modelDAO");

exports.createOne = dao.createOne(Review);
exports.updateOne = dao.updateOne(Review);
exports.getAll = dao.getAll(Review);
exports.getOne = dao.getOne(Review);
exports.deleteOne = dao.deleteOne(Review);
exports.createMany = dao.createMany(Review);
exports.filter = dao.filter(Review);