// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      if (files.file) {
        try {
          const file = Array.isArray(files.file) ? files.file[0] : files.file;
          const result = await cloudinary.v2.uploader.upload(file.filepath, {
            folder: "your_folder_name", // optional
          });
          
          res.status(200).json({ url: result.secure_url });
        } catch (error) {
          res.status(500).json({ error: "Failed to upload image" });
        }
      } else {
        res.status(400).json({ error: "No file uploaded" });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
