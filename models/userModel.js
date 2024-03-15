const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Username is required"],
        minLength: [3, "Username must be at least 3 characters "],
        maxLength: [20, "Username cannot be more than 20 characters"]
    },

    email: {
        type: String,
        lowercase: true,
        required: [true, "Email address is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [3, "Password must be at least 3 characters "],
        maxLength: [15, "Password cannot be more than 15 characters"]
    },
   
}, {timestamps: true})

const user = mongoose.model('user', userModel);
module.exports = user;