const express = require("express")
const { createCombo, getCombo, toggoleComboStatus, getOneCombo, deleteCombo } = require("../controller/comboController")
const router = express.Router()




/* -------------------------------------------------- create student combination router ------------------------------------------------- */
router.post('/',createCombo)

/* ----------------------------------------------- get student subject combination router ----------------------------------------------- */
router.get('/',getCombo)

/* --------------------------------------------- toggole student subject combination router --------------------------------------------- */
router.get('/toggole/:comboId',toggoleComboStatus)

/* --------------------------------------------- get one student subject combination router --------------------------------------------- */
router.get('/:comboId',getOneCombo)

/* ---------------------------------------------- delete student subject combination router --------------------------------------------- */
router.delete('/:studentId/:subjectId/:comboId',deleteCombo)

module.exports = router