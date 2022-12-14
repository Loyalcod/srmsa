const express = require("express")
const server = express()
const cors = require('cors')
const corsOption = require('./server/config/corOption')
const credentails = require('./server/middlewares/credential')  
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const path = require("path")
const connectDB = require("./server/config/db")
require("dotenv").config({path: path.resolve(__dirname,'./server/.env')})

connectDB()
server.use(credentails)
server.use(cors(corsOption))

const port = process.env.PORT  
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(cookieParser())


server.get('/',(req,res)=>{
    res.send("this is the server side")
})

/* ------------------------------------------------------------ Admin crude router ------------------------------------------------------------ */
const AdminRouter = require("./server/router/AdminRouter")
server.use('/admin',AdminRouter)

/* --------------------------------------------------------- result crude router -------------------------------------------------------- */
const resultRouter = require("./server/router/resultRouter")
server.use('/result',resultRouter) 

/* ------------------------------------------------------- the middle ware router ------------------------------------------------------- */
const AuthMiddleware = require('./server/middlewares/AuthMiddleware')
server.use(AuthMiddleware)

/* ----------------------------------------------------- student class crude router ----------------------------------------------------- */
const StudentClassRouter = require("./server/router/StudentClassRouter")
server.use('/studentClass',StudentClassRouter)

/* -------------------------------------------------------- student crude router -------------------------------------------------------- */
const studentRouter = require("./server/router/studentRouter")
server.use('/student',studentRouter)

/* -------------------------------------------------------- subject crude router -------------------------------------------------------- */
const subjectRouter = require('./server/router/subjectRouter')
server.use('/subject',subjectRouter)

/* ---------------------------------------------- student subject combination crude router ---------------------------------------------- */
const comboRouter = require("./server/router/ComboRouter")
server.use('/combo',comboRouter)

/* ------------------------------------------------------ total count crude router ------------------------------------------------------ */
const totalCountRouter = require("./server/router/totalCountRouter")
server.use('/totalcount',totalCountRouter)




server.listen(port,()=>{
    console.log("this server is running")
})