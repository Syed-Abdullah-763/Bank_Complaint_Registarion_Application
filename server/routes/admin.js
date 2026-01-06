import express from "express";
import { adminAuth } from "../middlewares/admin.js";
import complaintModel from "../models/complaint.js";

const adminRoute = express.Router();

adminRoute.get("/all-complaints", adminAuth, async (req, res) => {
  try {
    const { cId, bankId } = req.query;

    if (cId) {
      const data = await complaintModel.findById({ _id: cId });

      return res.status(200).json({
        message: "complaint is fetched",
        status: true,
        data,
      });
    }

    if (bankId) {
      const data = await complaintModel.find({ bankId });

      return res.status(200).json({
        message: "bank complaints are fetched",
        status: true,
        data,
      });
    }

    const data = await complaintModel.find({});

    return res.status(200).json({
      message: "complaints are fetched successfully!",
      status: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
});

export default adminRoute;
