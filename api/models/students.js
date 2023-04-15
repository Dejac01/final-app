const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    contactInfo:  { type: String, required: true },
    teacherID: { type: String, required: true },
    enrolled: Boolean,
    pw: { type: String, required: true }
   
});

const Students = mongoose.model('Students', studentsSchema);

module.exports = Students;