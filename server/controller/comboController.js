const Combo = require("../model/stdSubComboModel")
const Student = require("../model/studentModel")
const Subject = require("../model/subjectModel")



exports.createCombo = async(req,res)=>{

    
    const {studentId,subjectId} = req.body
    
    try {
        const checkComboExist = await Student.findById(studentId)
        if(checkComboExist.subjectId.includes(subjectId)){
            return res.status(409).json({error:" combo already exist"})
        }

        const pushSubjectIdinStudent = await Student.findOneAndUpdate(
            {_id: studentId},
            {$push: {subjectId:subjectId}}
        )

        const pushStudentIdinSubject = await Subject.findOneAndUpdate(
            {_id: subjectId},
            {$push: {studentId:studentId}}
        )

        const createCombo = await Combo.create({
            studentId,
            subjectId
        })

        res.json(createCombo)


    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getCombo = async(req,res)=>{
    try {
        const getcombo = await Combo.find()
        .populate('studentId').populate('subjectId')
        res.json(getcombo)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.toggoleComboStatus = async(req,res)=>{
    const { comboId } = req.params 

    try {
        const getingStatus = await Combo.findById(comboId).select('status')
        let realStatus = getingStatus.status

        realStatus === true ? realStatus = false : realStatus = true

        const toggolestatus = await Combo.updateOne(
            {_id: comboId},
            {$set: {status: realStatus}}
        )

        res.json(toggolestatus)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneCombo = async(req,res)=>{
    const { comboId } = req.params 

    try {
        const getonecombo = await Combo.findById(comboId)
        .populate({
            path: 'studentId',
            populate: {
                path: 'classId'
            }
        }).populate('subjectId')
        res.json(getonecombo)


    } catch (error) {
        res.json({error:error.message})
    }
}


exports.deleteCombo = async(req,res)=>{
    const { studentId, subjectId, comboId } = req.params

    try {

        const removeSubjectIdinStudent = await Student.findOneAndUpdate(
            {_id: studentId},
            {$pull: {subjectId:subjectId}}
        )

        const removeStudentIdinSubject = await Subject.findOneAndUpdate(
            {_id: subjectId},
            {$pull: {studentId:studentId}}
        )

        const deletecombo = await Combo.deleteOne({_id: comboId})
        res.json(deletecombo)
        
    } catch (error) {
        res.json({error:error.message})
    }
}