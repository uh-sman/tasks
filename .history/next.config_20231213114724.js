/** @type {import('next').NextConfig} */

// next.config.js
const nextConfig = {
    publicRuntimeConfig: {
     REACT_APP_CLOUDINARY_CLOUD_NAME: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
     REACT_APP_CLOUDINARY_API_KEY: process.env.REACT_APP_CLOUDINARY_API_KEY,
     REACT_APP_CLOUDINARY_API_SECRET: process.env.REACT_APP_CLOUDINARY_API_SECRET,
     REACT_APP_CLOUDINARY_UPLOAD_PRESET: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
     // Add other environment variables if needed
   },
}

  

module.exports = nextConfig


