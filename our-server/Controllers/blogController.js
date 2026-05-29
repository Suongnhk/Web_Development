const blog = require('../models/blog');
const dao = require('../utils/modelDAO');

exports.createOne = dao.createOne(blog);
exports.updateOne = dao.updateOne(blog);
exports.getAll = dao.getAll(blog);
exports.getOne = dao.getOne(blog);
exports.deleteOne = dao.deleteOne(blog);
exports.createMany = dao.createMany(blog);
exports.filter = dao.filter(blog);
