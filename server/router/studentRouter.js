const express = require("express")
const { student, getStudent, getOneStudent, updateStudent, deleteStudent,  } = require("../controller/studentController")
const router = express.Router()




/* -------------------------------------------------------- create student router ------------------------------------------------------- */
router.post('/',student)

/* ------------------------------------------------------- get all student router ------------------------------------------------------- */
router.get('/studentget',getStudent)

/* ------------------------------------------------------- get one student router ------------------------------------------------------- */
router.get('/:studentId', getOneStudent)

/* ------------------------------------------------------ update one student router ----------------------------------------------------- */
router.patch('/:studentId', updateStudent)

/* -------------------------------------------------------- delete student router ------------------------------------------------------- */
router.delete('/:classId/:studentId',deleteStudent)


module.exports = router