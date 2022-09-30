const express = require("express")
const { totalCount } = require("../controller/totalCountController")
const router = express.Router()


/* -------------------------------------------------- total count for all the database -------------------------------------------------- */
router.get('/',totalCount)



module.exports = router