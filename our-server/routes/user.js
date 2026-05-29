const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const userService = require("../Controllers/userController");

router.get("/", userService.getAll);
router.get("one/:id", userService.getOne);
router.get("/filter", userService.filter);
router.post("/one", userService.createOne);
router.post("/many", userService.createMany);
router.put("/:id", userService.updateOne);
router.delete("/:id", userService.deleteOne);

module.exports = router;