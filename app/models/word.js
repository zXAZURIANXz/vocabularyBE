const mongoose = require('mongoose');


const WordScheme = new mongoose.Schema(
    {
        word:{type:String,unique:true},
        meaning:{type:String},
        usexample:{type:String}
    }
)

const Word = new mongoose.model('words', WordScheme) 
module.exports = { Word }