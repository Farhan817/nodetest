const {fetchall} = require("../controller/getData")
const router = require("express").Router();

router.get("/all",fetchall)
module.exports= router