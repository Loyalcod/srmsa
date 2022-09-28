const express = require("express")
const { registerAdmin, loginAdmin, refreshLoginAdmin, logoutAdmin } = require("../controller/AdminController")
const router = express.Router()


/* -------------------------------------------------------- register Admin router ------------------------------------------------------- */
router.post('/',registerAdmin)

/* --------------------------------------------------------- login admin router --------------------------------------------------------- */
router.post('/login',loginAdmin)

/* ----------------------------------------------------- refresh login admin router ----------------------------------------------------- */
router.get('/refresh',refreshLoginAdmin)

/* --------------------------------------------------------- logout Admin router -------------------------------------------------------- */
router.get('/logout',logoutAdmin)






module.exports = router