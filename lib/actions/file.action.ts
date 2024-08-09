// lib/actions/cloudinary.ts
import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(filePath: string) {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      folder: 'your_folder_name', // optional
    });
    return result;
  } catch (error) {
    throw error;
  }
}
