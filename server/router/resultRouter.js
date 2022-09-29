const express = require("express")
const { createResult, getResult, checkResult, getOneResult, updateResult, deleteResult } = require("../controller/resultController")
const router = express.Router()





/* ------------------------------------------------------- creating result router ------------------------------------------------------- */
router.post('/',createResult)

/* ---------------------------------------------------------- get result router --------------------------------------------------------- */
router.get('/',getResult)

/* --------------------------------------------------------- check result router -------------------------------------------------------- */
router.get('/:registrationNo/:email', checkResult)

/* -------------------------------------------------------- get one result router ------------------------------------------------------- */
router.get('/:resultId',getOneResult)

/* -------------------------------------------------------- update result router -------------------------------------------------------- */
router.patch('/:resultId',updateResult)

/* -------------------------------------------------------- delete result router -------------------------------------------------------- */
router.delete('/:studentId/:subjectId/:resultId',deleteResult)



module.exports = router