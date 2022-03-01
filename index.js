const express = require("express")
const cors = require("cors");
const fetchall = require("./src/route/getdata");
const editData = require("./src/route/editData");
const addDate= require('./src/route/addData');
const deleteData = require ("./src/route/deleteData")
const app= express();

app.use(cors());
app.use(express.json());
app.use("/api",fetchall)
app.use("/api",addDate)
app.use("/api",editData)
app.use("/api",deleteData)

app.listen(3000, function(){
    console.log("listining to port :3000",)
})