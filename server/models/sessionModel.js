const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//session schema
const sessionSchema = new Schema({
    cookie: { type: String, required: true, unique: true },
    createdAt: { type: Date, expires: 86400, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);