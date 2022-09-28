const mongoose = require("mongoose")



const stdClassSchema = mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },

    studentId: [{type: mongoose.Types.ObjectId, ref: 'student'}]
},{timestamps: true})



module.exports = mongoose.model('classes',stdClassSchema)