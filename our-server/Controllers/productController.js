const product = require('../models/product');
const dao = require('../utils/modelDAO');

exports.createOne = dao.createOne(product);
exports.updateOne = dao.updateOne(product);
exports.getAll = dao.getAll(product);
exports.getOne = dao.getOne(product);
exports.deleteOne = dao.deleteOne(product);
exports.createMany = dao.createMany(product);
exports.filter = dao.filter(product);
exports.pagination = dao.pagination(product);
exports.getMaxPage = dao.getMaxPage(product);

