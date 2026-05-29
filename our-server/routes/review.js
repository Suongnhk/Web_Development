const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const reviewService = require("../Controllers/reviewController.js");

router.get("/", authMiddleware.auth, reviewService.getAll);
router.get("/one/:id", authMiddleware.auth, reviewService.getOne);
router.get("/filter", authMiddleware.auth, reviewService.filter);
router.post("/one", authMiddleware.auth, reviewService.createOne);
router.post("/many", authMiddleware.auth, reviewService.createMany);
router.put("/:id", authMiddleware.auth, reviewService.updateOne);
router.delete("/:id", authMiddleware.auth, reviewService.deleteOne);

module.exports = router;
