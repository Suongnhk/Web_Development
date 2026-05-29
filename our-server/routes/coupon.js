const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const couponService = require("../Controllers/couponController");

router.get("/", couponService.getAll);
router.get("one/:id", couponService.getOne);
router.get("/filter", couponService.filter);
router.post("/one", couponService.createOne);
router.post("/many",  couponService.createMany);
router.put("/:id",  couponService.updateOne);
router.delete("/:id",  couponService.deleteOne);

module.exports = router;