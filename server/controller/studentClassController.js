const StudentClass = require("../model/stdClassModel")



exports.createStudentClass = async(req,res)=>{
    if(!(req.body.className || req.body.section)) return res.status(400).json({error:"data not properly formatted"})

    const {className,section} = req.body

    try {
        const classNameexist = await StudentClass.exists({className})
        if(classNameexist) return res.status(401).json({error:"class already exist"})
        const createStudentClass = await StudentClass.create({
            className,
            section
        })
        res.json(createStudentClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getClass = async(req,res)=>{
    try {

        const getClass = await StudentClass.find()
        res.json(getClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneClass = async(req,res)=>{
    const {classId} = req.params 

    try {
        const getOneClass = await StudentClass.findById(classId)
        res.json(getOneClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.updateClass = async(req,res)=>{
    if(!(req.body.className || req.body.section)) return res.status(400).json({error:"data not properly formatted"})

    const {classId}=req.params

    const className = req.body.className !== ''? req.body.className : StudentClass.className
    const section = req.body.section !== ''? req.body.section : StudentClass.section

    try {
        
        const updateclass = await StudentClass.updateOne(
            {_id: classId},
            {$set: {className,section}}
        )
        res.json(updateclass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteClass = async(req,res)=>{
    const {classId} = req.params
    try {
        const deleteClass = await StudentClass.deleteOne({_id:classId})
        res.json(deleteClass)

    } catch (error) {
        res.json({error:error.message})
    }
}
