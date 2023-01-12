import path from "path";
import express from "express";
import uploader from "../multer.js";
import cloudinary from "../cloudinary.js";
const router = express.Router();

router.post("/", uploader.single("image"), async (req, res) => {
  const upload = await cloudinary.v2.uploader.upload(req.file.path);
  return res.json({
    success: true,
    file: upload.secure_url,
  });
});

export default router;
