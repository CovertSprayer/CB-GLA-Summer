const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    photo:{
        type:String,
        default:'https://cdn-icons-png.flaticon.com/512/219/219959.png'
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    contact:{
        type:Number,
    },
    address:{
        type:String,
        trim:true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;


