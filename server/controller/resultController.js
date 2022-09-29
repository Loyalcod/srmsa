const Result = require("../model/resultModel")
const Student = require("../model/studentModel")
const Subject = require("../model/subjectModel")



exports.createResult = async(req,res)=>{
    if(!(req.body.studentId || req.body.subjectId || req.body.classId || req.body.mark ))  return res.status(400).json({error:"data not properly formatted"})
    const { studentId, subjectId, classId, mark } = req.body

    try {
        const resultExist = await Result.exists({$or: [{studentId},{subjectId},{classId}]})
        if(resultExist) return res.status(401).json({error:"result already exist"})

        const createresult = await Result.create({
            studentId,
            subjectId,
            classId,
            mark
        })

        const pushResultIdinStudent = await Student.findOneAndUpdate(
            {_id: studentId},
            {$push: {resultId: createresult._id}}
        )

        const pushResultIdinSubject = await Subject.findOneAndUpdate(
            {_id: subjectId},
            {$push: {resultId: createresult._id}}
        )

        res.json(createresult)
        

        
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getResult = async(req,res)=>{
    try {
        const getresult = await Result.find()
        .populate('studentId').populate('subjectId').populate('classId')

        res.json(getresult)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.checkResult = async(req,res)=>{
    const { registrationNo, email } = req.params 

    try {
        const checkStudentResultExist = await Student.exists({registrationNo, email})
        if(!checkStudentResultExist) return res.status(409).json({error:"result does not exist"})

        const checkresult = await Student.find({registrationNo,email})
        .populate('classId')
        .populate({
            path: 'resultId',
            populate: {
                path: 'subjectId'
            }
        })
        res.json(checkresult)

    } catch (error) {
        res.json({error:error.message})
    }
}


exports.getOneResult = async(req,res)=>{
    const { resultId } = req.params 

    try {
        const getoneresult = await Result.findById(resultId)
        .populate('studentId').populate('subjectId').populate('classId')
        res.json(getoneresult)


    } catch (error) {
        res.json({error:error.message})
    }
}

exports.updateResult = async(req,res)=>{
    const { resultId } = req.params 

    const mark = req.body.mark !== ''? req.body.mark : Result.mark
    try {
        const updateresult = await Result.updateOne(
            {_id: resultId},
            {$set: {mark}}
        )
        res.json(updateresult)

    } catch (error) {
        res.json({error:error.message})
    }
}


exports.deleteResult = async(req,res)=>{
    const { resultId, studentId, subjectId } = req.params

    try {

        const removeResultinStudent = await Student.findOneAndUpdate(
            {_id: studentId},
            {$pull: {resultId}}
        )

        const removeResultinSubject = await Subject.findOneAndUpdate(
            {_id: subjectId},
            {$pull: {resultId}}
        )

        const deleteresult = await Result.deleteOne({_id: resultId})
        res.json(deleteresult)
        
    } catch (error) {
        res.json({error:error.message})
    }
}