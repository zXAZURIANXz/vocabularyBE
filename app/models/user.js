const mongoose = require('mongoose');


const UserScheme = new mongoose.Schema(
    {
        name:{type:String},
        email:{type:String, unique:true, required:true},
        password:{type:String}
    }
)


const User = new mongoose.model('users', UserScheme)

module.exports = { User }