const express = require("express")
const { registerAdmin, loginAdmin, refreshLoginAdmin, logoutAdmin } = require("../controller/AdminController")
const verifyAuthentication = require("../middlewares/AuthMiddleware")
const router = express.Router()



/* -------------------------------------------------------- register Admin router ------------------------------------------------------- */
router.post('/',registerAdmin)

/* --------------------------------------------------------- login admin router --------------------------------------------------------- */
router.post('/login',loginAdmin)

/* ----------------------------------------------------- refresh login admin router ----------------------------------------------------- */
router.get('/refresh',refreshLoginAdmin)

/* --------------------------------------------------------- logout Admin router -------------------------------------------------------- */
router.get('/logout', verifyAuthentication, logoutAdmin)






module.exports = router