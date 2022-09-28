const express = require("express")
const { createStudentClass, getClass, getOneClass, updateClass, deleteClass } = require("../controller/studentClassController")
const router = express.Router()



/* ----------------------------------------------------- create student class router ---------------------------------------------------- */
router.post('/',createStudentClass)

/* ------------------------------------------------------ get student class router ------------------------------------------------------ */
router.get('/',getClass)

/* ---------------------------------------------------- get one student class router ---------------------------------------------------- */
router.get('/:classId',getOneClass)

/* ----------------------------------------------------- update student class router ---------------------------------------------------- */
router.patch('/:classId',updateClass)

/* ----------------------------------------------------- delete student class router ---------------------------------------------------- */
router.delete('/:classId',deleteClass)


module.exports = router