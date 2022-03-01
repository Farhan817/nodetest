const {addData} = require("../controller/addData")
const router = require("express").Router();

router.post("/add",addData)
module.exports= router