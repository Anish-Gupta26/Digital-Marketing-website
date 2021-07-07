const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email address")
            }
        }    
    },
    phone: {
        type: Number,
        required: true,
    },
    message : {
        type: String,
        default: "none"
    },
    date:{
        type: Date,
        default: Date.now
    }
})

//Collectin
const User = mongoose.model("User",userSchema);

module.exports = User;