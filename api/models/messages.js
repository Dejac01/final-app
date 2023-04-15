const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    sender:  { type: String, required: true },
    subject:  { type: String, required: true },
    body:  { type: String, required: true },
   
   
});

const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;