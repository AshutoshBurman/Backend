import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';



// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.COULDINARY_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        cloudinary.uploader.upload(localFilePath, {resource_type: 'auto'})
        //file has been uploladed successfully
        console.log('file is uploaded successfully',
            response.url);
            return response
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved tempory file as the upload operation failed
        return null
    }
}



