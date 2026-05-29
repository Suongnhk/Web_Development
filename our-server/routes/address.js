const Router = require("express")
const router = Router()
const authMiddleware = require("../middlewares/auth");
const addressService = require("../Controllers/addressController");
const Address = require("../models/address");

router.get("/", addressService.getAll);
router.get("one/:id", addressService.getOne);
router.get("/filter", addressService.filter);
router.get("/user", addressService.getAddressByUser);
router.post("/one", addressService.createOne);
router.post("/many", addressService.createMany);
router.put("/:id", addressService.updateOne);
router.delete("/:id", addressService.deleteOne);

router.put("/setdefault/:id", authMiddleware.auth, async (req, res) => {
    try {
      const address = await Address.findById(req.params.id);
      if (!address) {
        return res.status(404).json({ error: "Address not found" });
      } else {
        address.isDefault = true;
        await address.save();
        res.status(200).json({ data: address });
      }
      userAddress = await Address.find({ user: req.user._id });
      userAddress.forEach(async (address) => {
        address.isDefault = false;
        await address.save();
      });
      // const address = await Address.findById(req.params.id);
      // if (!address) {
      // return res.status(404).json({ error: "Address not found" });
      // }
      // address.isDefault = true;
      // await address.save();
      // res.status(200).json({ data: address });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});
module.exports = router;