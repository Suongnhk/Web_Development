const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const Order = require("../models/order");

router.get("/", authMiddleware.auth, authMiddleware.admin, (req, res) => {
  res.send("Hello from admin");
});

router.get("/revenue", authMiddleware.auth, authMiddleware.admin, (req, res) => {
    Order.aggregate([
        {
        $match: {
            status: "completed",
        },
        },
        {
        $group: {
            _id: null,
            total: {
            $sum: "$total",
            },
        },
        },
    ]).exec((err, result) => {
        if (err) {
        res.status(500).json({ error: err.message });
        } else {
        res.status(200).json({ data: result});
        }
    });
});
router.get('/TotalOrder', authMiddleware.auth, authMiddleware.admin, (req, res) => {
    Order.aggregate([
        {
        $match: {
            status: "completed",
        },
        },
        {
        $group: {
            _id: null,
            total: {
            $sum: 1,
            },
        },
        },
    ]).exec((err, result) => {
        if (err) {
        res.status(500).json({ error: err.message });
        } else {
        res.status(200).json({ data: result});
        }
    });
});
router.get("/")