import express from "express";
import {
  generateComplaintController,
  getComplaintController,
} from "../controllers/complaint.js";
import { customerMiddleware } from "../middlewares/customer.js";

const complaintRoute = express.Router();

complaintRoute.post(
  "/complaint",
  customerMiddleware,
  generateComplaintController
);

complaintRoute.get("/complaint", customerMiddleware, getComplaintController);

export default complaintRoute;
