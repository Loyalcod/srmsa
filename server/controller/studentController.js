const Student = require("../model/studentModel")
const studentClass = require("../model/stdClassModel")


exports.student = async(req,res)=>{
    if(!(req.body.studentName || req.body.registrationNo || req.body.email || req.body.gender || req.body.classId || req.body.dob)) return res.status(400).send({error:"data not properly formatted"})
    const { studentName, registrationNo, email, gender, classId, dob } = req.body

    try {
        const studentExist = await Student.exists({$or: [{registrationNo},{email}]})
        if(studentExist) return res.status(401).send({error:"student already exist"})
        const createStudent = await Student.create({
            studentName,
            registrationNo,
            email,
            gender,
            classId,
            dob
        })

        const updateStudentClass = await studentClass.findById(classId)
        updateStudentClass.studentId.push(createStudent._id)
        const updatedStudentClass = updateStudentClass.save()

        res.json(createStudent)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getStudent = async(req,res)=>{
    try {
        const getstudent = await Student.find().populate('classId')
        res.json(getstudent)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneStudent = async(req,res)=>{

    const { studentId } = req.params 

    try {
        const getonestudent = await Student.findById(studentId)
        res.json(getonestudent)

    } catch (error) {
        res.json({error:error.message})
    }
}


exports.updateStudent = async(req,res)=>{
    const { studentId } = req.params 
    const { studentName, registrationNo, email, gender, classId, dob } = req.body
    
    try {
        const existStudent = await Student.findOne({_id:studentId})
        if(existStudent.classId !== classId){

            const romovestudentFromClass = await studentClass.findOneAndUpdate(
                {studentId: studentId},
                {$pull: {studentId:studentId}}
            )

            const pushstudentinClass = await studentClass.findOneAndUpdate(
                {_id: classId},
                {$push: {studentId:studentId}}
            )
        }

        const updatestudent = await Student.updateOne(
            {_id: studentId},
            {$set: {
                studentName,
                registrationNo,
                email,
                gender,
                classId,
                dob
            }}
        )

        res.json(updatestudent)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteStudent = async(req,res)=>{
    const { studentId,classId } = req.params 

    try {
        const removeStudentfromClass = await studentClass.findOneAndUpdate(
            {_id: classId},
            {$pull: {studentId:studentId}}
        )

        const deletestudent = await Student.deleteOne({_id:studentId})
        res.json(deletestudent)
        
    } catch (error) {
        res.json({error: error.message})
    }
}