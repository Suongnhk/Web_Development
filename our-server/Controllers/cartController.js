const cart = require('../models/cart');
const dao = require('../utils/modelDAO');

exports.createOne = dao.createOne(cart);
exports.updateOne = dao.updateOne(cart);
exports.getAll = dao.getAll(cart);
exports.getOne = dao.getOne(cart);
exports.deleteOne = dao.deleteOne(cart);
exports.createMany = dao.createMany(cart);
exports.filter = dao.filter(cart);
exports.getCartByUser = dao.getByUserId(cart);