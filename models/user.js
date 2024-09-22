
const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({
    email:String,
    name:String,
    password:String,
    createAt:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model('User',userSchema,'users');
