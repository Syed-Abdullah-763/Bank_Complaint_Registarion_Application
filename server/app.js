import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/mongoDb.js";
import cors from "cors";
import authRoute from "./routes/auth.js";
import complaintRoute from "./routes/complaint.js";

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

// Complaint Route
app.use("/api", complaintRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running...",
    status: true,
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
