const mongoose = require('mongoose');

const participants = new mongoose.Schema({
    name:String,
    email:String,
});

module.exports = mongoose.model("participants",participants);