import mongoose from 'mongoose'

const hospitalRecordSchema = new mongoose({}, {timestamps:true})

export const HospitalRecord = mongoose.model('HospitalRecord', hospitalRecordSchema );