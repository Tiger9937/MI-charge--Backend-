import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

async function FileUploadByCludnary(LocalPath) {
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    if (LocalPath) {

        try {
            const uploadResult = await cloudinary.uploader.upload(LocalPath, {resource_type: 'auto'})
        
            setTimeout(() => {
                fs.unlinkSync(LocalPath)
            }, 2000);
        
           return uploadResult

        } catch (error) {
            fs.unlinkSync(LocalPath)
            return error
        }
        
    }else{
        return "Local path is empty"
    }

}

export {FileUploadByCludnary}

