const mongoose = require('mongoose')

const AuthenticationSchema = new mongoose.Schema({
    User_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    session:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Authentication',AuthenticationSchema)