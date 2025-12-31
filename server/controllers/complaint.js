import complaintModel from "../models/complaint.js";

export const generateComplaintController = async (req, res) => {
  try {
    const user = req.user;

    const { complaintType, category, description, priority, uploadedEvidence } =
      req.body;

    await complaintModel.create({ ...req.body, createdBy: user._id });

    return res.status(201).json({
      message: "Your complaint has been generated",
      status: true,
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

    const data = await complaintModel.find({ createdBy: user._id });

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
