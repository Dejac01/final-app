const mongoose = require('mongoose');

const lessonsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    dueDate:  { type: String, required: true },
    link:  { type: String, required: true }
   
});

const Lessons = mongoose.model('Lessons', lessonsSchema);

module.exports = Lessons;