import multer from 'multer'

const store = multer.diskStorage({
    destination:function (req , file , cb) {
        cb(null , "public/temp" )
        // ! may error hapend
    },

    filename:function (req , file , cb) {
        cb(null,file.originalname)
    }
})

export const upload = multer({
    store
})