import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    usename:{
            type : String,
            required: true,
            unique : true,
            lowercase : true,
            trem: true,
            index : true
    },
    fullname : {
        type:String,
        require:true
    },
    email:{
        type : String,
        required: true,
        unique : true,
        trem: true,
    },
    password:{
            type : String,
            required: [true,'possword is required']
    },
    refreshToken:{
            type : String
    },
    profilePIC:{
        type:String,
        require:true
    },
    
    refreshToken:{
            type : String
    },
    
},{timestamps:true})

export const User = mongoose.model("User" , UserSchema) 