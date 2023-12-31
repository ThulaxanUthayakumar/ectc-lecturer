const mongoose = require('mongoose');

const LecturerSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        min: 4,
    },

    desc: {
        type: String,
        required: true,
        min: 8,
    },

    price: {
        type: Number,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    review: {
        type: Number,
        required: true,
    },

    category: {
        type: String,
        required: true,
    }

})

module.exports= mongoose.model("Lecturer",LecturerSchema)