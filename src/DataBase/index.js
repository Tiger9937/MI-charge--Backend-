import {DB_NAME} from '../constent.js'
import mongoose from 'mongoose'


const DB_conect = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error,"Somthing wont worng")
    }

    
}   

export default DB_conect