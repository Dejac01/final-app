const mongoose = require('mongoose');

const teachersSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    contactInfo:  { type: String, required: true },
    Admin: Boolean,
    pw: { type: String, required: true }
});

const Teachers = mongoose.model('Teachers', teachersSchema);

module.exports = Teachers;