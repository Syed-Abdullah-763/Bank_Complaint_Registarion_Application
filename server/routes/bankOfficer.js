import express from "express";
import { bankOfficerMiddleware } from "../middlewares/bankOfficer.js";
import complaintModel from "../models/complaint.js";

const bankOfficerRoute = express.Router();

bankOfficerRoute.get(
  "/bank-complaints",
  bankOfficerMiddleware,
  async (req, res) => {
    try {
      const bankId = req.user.bankId;
      const { cId } = req.query;

      if (cId) {
        const data = await complaintModel.findById({ _id: cId });

        return res.status(200).json({
          message: "Complaint is fetched by id!",
          status: false,
          data,
        });
      }

      const data = await complaintModel.find({ bankId });

      res.status(200).json({
        message: "Complaints are fetched!",
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
  }
);

bankOfficerRoute.patch(
  "/bank-complaints/:cId",
  bankOfficerMiddleware,
  async (req, res) => {
    try {
      const { cId } = req.params;
      const { status } = req.body;

      const data = await complaintModel.findByIdAndUpdate(
        { _id: cId },
        { status },
        { new: true }
      );

      res.status(200).json({
        message: "Status updated successfully!",
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
  }
);

export default bankOfficerRoute;
