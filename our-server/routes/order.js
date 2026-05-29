const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const orderService = require("../Controllers/orderController");
const Cart = require("../models/cart");
router.get("/", orderService.getAll);
router.get("one/:id", orderService.getOne);
router.get("/filter", orderService.filter);
router.post("/one" ,orderService.createOne, (req, res) => {
    Cart.findOne({ user: req.user._id })
        .then((cart) => {
            if (!cart) {
                return 
            } else {
                cart.products = [];
                cart.save();
            }
        })
        .catch((err) => {
        });
}
);
router.post("/many" ,orderService.createMany);
router.put("/:id", orderService.updateOne);
router.delete("/:id", orderService.deleteOne);

module.exports = router;