import {asyncHand} from '../util/asyncHandler.util.js'


const registerUser = asyncHand(async (req,res)=>{
    res.status(200).json({
        message:"Ok"
    })
})