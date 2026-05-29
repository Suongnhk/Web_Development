const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const blogService = require("../Controllers/blogController");


router.get("/", blogService.getAll);
router.get("one/:id", blogService.getOne);
router.get("/filter", blogService.filter);
router.post("/one", authMiddleware.auth, authMiddleware.admin, blogService.createOne);
router.post("/many", authMiddleware.auth, authMiddleware.admin,blogService.createMany);
router.put("/:id", authMiddleware.auth, authMiddleware.admin, blogService.updateOne);
router.delete("/:id", authMiddleware.auth, authMiddleware.admin, blogService.deleteOne);

module.exports = router;