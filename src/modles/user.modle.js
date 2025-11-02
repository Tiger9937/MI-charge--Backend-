import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

UserSchema.pre("save",async function (next) {
    if(this.isModified("password")){
        this.password = bcrypt.hash(this.password,10)
        next()
    }
})

UserSchema.methods.isPasswordChange(async function (password) {
    return await bcrypt.compare(password , this.password)
})

UserSchema.methods.GenerateRefreshToken = function () {
    return jwt.sign({
        _id:this._id,
        username:this.usename
    },{key:process.env.JWT_ACCESS_SECRET},{expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}

UserSchema.methods.GenrateAccesToken = function () {
    return jwt.sign({
        _id:this._id,
        username:this.usename
    },{key:process.env.JWT_ACCESS_SECRET},{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

export const User = mongoose.model("User" , UserSchema) 