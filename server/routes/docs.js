import express from "express";
import { customerMiddleware } from "../middlewares/customer.js";
import { upload } from "../middlewares/multer.js";
import { cloudinaryConfig, cloudinaryUploader } from "../config/cloudinary.js";
import fs from "fs";

const docRoute = express.Router();

docRoute.post(
  "/upload",
  [customerMiddleware, upload.any("files")],
  async (req, res) => {
    try {
      cloudinaryConfig();

      const docCollection = req.files;
      const fileArr = [];

      for (var file of docCollection) {
        const response = await cloudinaryUploader.upload(file.path);
        const objToPush = {
          ...file,
          imageUrl: response.secure_url,
        };
        fileArr.push(objToPush);
      }

      return res.status(200).json({
        message: "Avidance is uploaded",
        status: true,
        data: fileArr,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        status: false,
        data: null,
      });
    } finally {
      const docCollection = req.files;

      for (var file of docCollection) {
        fs.unlinkSync(file.path);
      }
    }
  }
);

export default docRoute;
