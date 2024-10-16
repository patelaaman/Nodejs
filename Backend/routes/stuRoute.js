const express= require("express")

const route = express.Router();
const stuCon = require("../controller/stuController")

route.post("/stuSave",stuCon.stuSave)
route.get("/studisplay",stuCon.stuDisplay)

module.exports =route