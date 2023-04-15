const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    greet:  { type: String, required: true },
   
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
    // File Must be exported in order to be used in index.js