const coupon = require('../models/coupon');
const dao = require('../utils/modelDAO');

exports.createOne = dao.createOne(coupon);
exports.updateOne = dao.updateOne(coupon);
exports.getAll = dao.getAll(coupon);
exports.getOne = dao.getOne(coupon);
exports.deleteOne = dao.deleteOne(coupon);
exports.createMany = dao.createMany(coupon);
exports.filter = dao.filter(coupon);