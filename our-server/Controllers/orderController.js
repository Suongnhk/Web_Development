const order = require('../models/order');
const dao = require('../utils/modelDAO');

exports.createOne = dao.createOne(order);
exports.updateOne = dao.updateOne(order);
exports.getAll = dao.getAll(order);
exports.getOne = dao.getOne(order);
exports.deleteOne = dao.deleteOne(order);
exports.createMany = dao.createMany(order);
exports.filter = dao.filter(order);