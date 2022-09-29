const express = require("express")
const { subject, getSubject, getOneSubject, updateSubject, deleteSubject } = require("../controller/subjectController")
const router = express.Router()


/* -------------------------------------------------------- create subject router ------------------------------------------------------- */
router.post('/',subject)

/* --------------------------------------------------------- get subject router --------------------------------------------------------- */
router.get('/',getSubject)

/* ------------------------------------------------------ geting one subject router ----------------------------------------------------- */
router.get('/:subjectId',getOneSubject)

/* ----------------------------------------------------- updating one subject router ---------------------------------------------------- */
router.patch('/:subjectId',updateSubject)

/* -------------------------------------------------------- delete subject router ------------------------------------------------------- */
router.delete('/:subjectId',deleteSubject)


module.exports = router