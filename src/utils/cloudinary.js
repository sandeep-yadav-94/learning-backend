import {v2 as claudinary} from "cloudinary"
import fs from fs

cloudinary.config({ 
        cloud_name: process.env.CLAUDINARY_CLOUD_NAME, 
        api_key: process.env.CLAUDINARY_API_KEY, 
        api_secret: CLAUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const uploadOnClaudinary = async (localPath) => {
    try {
        if(!localPath){
            return null;
        }
        claudinary.uploader.upload(localPath, {
            resource_type
        })
    } catch (error) {
        
    }
}
