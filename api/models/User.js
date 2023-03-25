const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,  //to reset password
    expireToken:Date,
    pic:{
     type:String,
     default:"https://www.parresia.com.ng/wp-content/uploads/2022/01/87a51b29976632f8ebd08cb09e6532dc-768x768.jpg"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User",userSchema)