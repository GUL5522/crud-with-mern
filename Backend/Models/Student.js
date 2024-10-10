const mongoose = require('mongoose');

const studentSchema =new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    age:Number
});

const StudentModel = mongoose.model('Student',studentSchema);

module.exports = StudentModel;