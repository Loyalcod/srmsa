const Subject = require('../model/subjectModel')



exports.subject = async(req,res)=>{
    if(!( req.body.subjectName || req.body.subjectCode )) return res.status(400).json({error:"data not properly formatted"})
    const { subjectName, subjectCode } = req.body

    try {
        const  subjectExist = await Subject.exists({$or: [{subjectName},{subjectCode}]})
        if(subjectExist) return res.status(401).send({error:"subject already exist"})

        const newSubject = new Subject ({
            subjectName,
            subjectCode,
           
        })

        const savenewSubject = newSubject.save()
        res.json(newSubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getSubject = async(req,res)=>{
    try {
        const getsubject = await Subject.find()
        res.json(getsubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneSubject = async(req,res)=>{
    const { subjectId } = req.params 

    try {
        const getonesubject = await Subject.findById(subjectId)
        res.json(getonesubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.updateSubject = async(req,res)=>{
    const { subjectId } = req.params 

    const subjectName = req.body.subjectName !== ''? req.body.subjectName : Subject.subjectName
    const subjectCode = req.body.subjectCode !== ''? req.body.subjectCode : Subject.subjectCode

    try {
        const updatesubject = await Subject.updateOne(
            {_id: subjectId},
            {$set: {
                subjectName,
                subjectCode
            }}
        )

        res.json(updatesubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteSubject = async(req,res)=>{
    const { subjectId } = req.params 

    try {
        const deletesubject = await Subject.deleteOne({_id: subjectId})
        res.json(deletesubject)
        
    } catch (error) {
        res.json({error:error.message})
    }
}

