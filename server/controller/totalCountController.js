const Student = require('../model/studentModel')
const Subject = require("../model/subjectModel")
const Class = require("../model/stdClassModel")
const Result = require("../model/resultModel")




exports.totalCount = async(req,res)=>{
    try {
        const studentTotal = await Student.count()
        const subjectTotal = await Subject.count()
        const ClassTotal = await Class.count()
        const ResultTotal = await Result.count()

        res.json({
            studentTotal,
            subjectTotal,
            ClassTotal,
            ResultTotal
        })
        
    } catch (error) {
        res.json({error:error.message})
    }
}