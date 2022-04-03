const mongoose = require('mongoose');

const daimgSchema = new mongoose.Schema({
    imagePath:{
        type: String,
    },
    totalclick:{
        type: Number
    }
})

module.exports = mongoose.models.Daimg || mongoose.model('Daimg', daimgSchema)