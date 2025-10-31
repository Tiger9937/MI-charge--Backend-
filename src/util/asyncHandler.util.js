

const asyncHand = (fn) => async(req,res,next) =>{
    try {
        
    } catch (error) {
        res.status(error.code || 500).json({
            succes:false,
            message:error.message
        })
    }
}

export {asyncHand}