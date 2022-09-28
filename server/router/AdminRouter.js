const express = require("express")
const { registerAdmin } = require("../controller/AdminController")
const router = express.Router()


/* -------------------------------------------------------- register Admin router ------------------------------------------------------- */
router.post('/',registerAdmin)






module.exports = router