const {editData} = require("../controller/editData")
const router = require("express").Router();

router.patch ("/update",editData)
module.exports = router