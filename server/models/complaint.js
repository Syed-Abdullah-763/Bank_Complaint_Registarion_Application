import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    complaintType: {
      type: String,
      required: true,
      enum: ["complaint", "Fraud"],
    },
    category: {
      type: String,
      required: true,
      enum: ["ATM", "Card", "Online Banking", "Branch Banking", "Other"],
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
      enum: ["low", "medium", "high"],
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "inProgress", "resolved", "rejected", "closed"],
      default: "pending",
    },
    uploadedAvidance: {
      type: Array,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    bankId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bank",
    },
  },
  { timeseries: true }
);

const complaintModel = mongoose.model("complaint", complaintSchema);

export default complaintModel;
