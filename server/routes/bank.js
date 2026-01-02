import express from "express";
import {
  addBankController,
  BankDropdownController,
} from "../controllers/bank.js";
import { adminAuth } from "../middlewares/admin.js";

const bankRoute = express.Router();

bankRoute.post("/bank", adminAuth, addBankController);
bankRoute.get("/bank", adminAuth, BankDropdownController);

export default bankRoute;
