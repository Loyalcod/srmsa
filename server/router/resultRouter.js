const express = require("express")
const { createResult, getResult, checkResult, getOneResult, updateResult, deleteResult } = require("../controller/resultController")
const verifyAuthentication = require("../middlewares/AuthMiddleware")
const router = express.Router()





/* ------------------------------------------------------- creating result router ------------------------------------------------------- */
router.post('/', verifyAuthentication, createResult)

/* ---------------------------------------------------------- get result router --------------------------------------------------------- */
router.get('/', verifyAuthentication, getResult)

/* --------------------------------------------------------- check result router -------------------------------------------------------- */
router.get('/:email/:registrationNo', checkResult)

/* -------------------------------------------------------- get one result router ------------------------------------------------------- */
router.get('/:resultId', verifyAuthentication, getOneResult)

/* -------------------------------------------------------- update result router -------------------------------------------------------- */
router.patch('/:resultId', verifyAuthentication, updateResult)

/* -------------------------------------------------------- delete result router -------------------------------------------------------- */
router.delete('/:studentId/:subjectId/:resultId', verifyAuthentication, deleteResult)



module.exports = router