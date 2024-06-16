import mongoose from 'mongoose'

const doctorRecordSchema = new mongoose({}, {timestamps:true})

export const DoctorRecord = mongoose.model('DoctorRecord', doctorRecordSchema );