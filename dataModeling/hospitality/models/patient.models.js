import mongoose from 'mongoose'

const patientSchema = new mongoose({
    name:{
        type: String,
        required: true
    },
    diagonsedWidth: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ['M', 'F', 'O'],
        required:true
    },
    admittedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },

}, {timestamps:true})

export const MedicalRecord = mongoose.model('MedocalRecord', patientSchema );