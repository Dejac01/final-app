const mongoose = require('mongoose');

const lessonsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    dueDate:  { type: String, required: true },
    submitted: Boolean
   
});

const Lessons = mongoose.model('Lessons', lessonsSchema);

module.exports = Lessons;