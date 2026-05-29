const address = require("../models/address");
const dao = require("../utils/modelDAO");

exports.createOne = dao.createOne(address)
exports.updateOne = dao.updateOne(address);
exports.getAll = dao.getAll(address);
exports.getOne = dao.getOne(address);
exports.getAddressByUser = dao.getByUserId(address);
exports.deleteOne = dao.deleteOne(address);
exports.createMany = dao.createMany(address);
exports.filter = dao.filter(address);