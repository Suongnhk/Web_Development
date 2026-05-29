const { Router } = require("express");
const Product = require("../models/product");
const router = Router();

router.get("/ProductInfo", async (req, res) => {
  const result = await Product.find({}).toArray();
  res.send(result);
});

router.get("/ProductInfo/:Name", async (req, res) => {
  const name = req.params.Name;
  const regexPattern = new RegExp(name, "i");
  const result = await Product.find({ Name: regexPattern }).toArray();
  res.send(result);
});

router.get("/ProductInfo/category/:category", async (req, res) => {
  const o_category = new RegExp(req.params.category, "i");
  const result = await Product.find({ category: o_category }).toArray();
  res.send(result);
});
router.post("/ProductInfo", async (req, res) => {
    const { name, category, price } = req.body;
    const newProduct = new Product({ name, category, price });
    await newProduct.save();
    res.send(newProduct);
  });

module.exports = router;