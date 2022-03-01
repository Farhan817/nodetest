const {deleteData} = require("../controller/deleteData")
const router = require("express").Router();

router.post("/delete",deleteData)
module.exports = router