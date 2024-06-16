import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose({}, {timestamps:true})

export const MedicalRecord = mongoose.model('MedocalRecord', medicalRecordSchema );