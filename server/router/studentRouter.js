const express = require("express")
const { student, getStudent, getOneStudent, updateStudent,  } = require("../controller/studentController")
const router = express.Router()




/* -------------------------------------------------------- create student router ------------------------------------------------------- */
router.post('/',student)

/* ------------------------------------------------------- get all student router ------------------------------------------------------- */
router.get('/studentget',getStudent)

/* ------------------------------------------------------- get one student router ------------------------------------------------------- */
router.get('/:studentId', getOneStudent)

/* ------------------------------------------------------ update one student router ----------------------------------------------------- */
router.patch('/:studentId', updateStudent)


module.exports = router