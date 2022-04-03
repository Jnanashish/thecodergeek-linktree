const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    link:{
        type: String,
    },
    totalclick:{
        type: Number
    }
})

module.exports = mongoose.models.Links  || mongoose.model('Links', linkSchema) 