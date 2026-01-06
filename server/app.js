import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/mongoDb.js";
import cors from "cors";
import authRoute from "./routes/auth.js";
import complaintRoute from "./routes/complaint.js";
import docRoute from "./routes/docs.js";
import bankRoute from "./routes/bank.js";
import bankOfficerRoute from "./routes/bankOfficer.js";
import adminRoute from "./routes/admin.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// DB Connection
dbConnection();

// Auth Route
app.use("/api/auth", authRoute);
// Admin Route
app.use("/api", adminRoute);
// Complaint Route
app.use("/api", complaintRoute);
// Doc Route
app.use("/api", docRoute);
// Bank Route
app.use("/api", bankRoute);
// Bank Officer Route
app.use("/api", bankOfficerRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running...",
    status: true,
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
