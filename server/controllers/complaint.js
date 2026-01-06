import bankModel from "../models/bank.js";
import complaintModel from "../models/complaint.js";
import userModel from "../models/user.js";

export const generateComplaintController = async (req, res) => {
  try {
    const user = req.user;

    const {
      complaintType,
      category,
      description,
      priority,
      uploadedEvidence,
      bankName,
    } = req.body;

    if (!complaintType || !category || !description || !priority || !bankName) {
      return res.status(400).json({
        message: "Required fields are missing",
        status: false,
        data: null,
      });
    }

    const bank = await bankModel.findOne({ bankName });

    const complaint = await complaintModel.create({
      ...req.body,
      createdBy: user._id,
      bankId: bank._id,
    });

    return res.status(201).json({
      message: "Your complaint has been generated",
      status: true,
      complaintId: complaint._id,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const getComplaintController = async (req, res) => {
  try {
    const user = req.user;

    const data = await complaintModel.find({ createdBy: user._id }).lean();

    delete data["bankId"];

    return res.status(200).json({
      message: "Complaints are fetched",
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
};
