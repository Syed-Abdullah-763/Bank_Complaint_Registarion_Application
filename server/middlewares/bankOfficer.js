import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

export const bankOfficerMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const isVerify = jwt.verify(token, process.env.PRIVATE_KEY);

    if (!isVerify) {
      return res.status(401).json({
        message: "unAth user",
        status: false,
        data: null,
      });
    }

    const user = await userModel.findById({ _id: isVerify._id }).select("role");

    if (!user) {
      return res.status(401).json({
        message: "unAth user!",
        status: false,
        data: null,
      });
    }

    if (user.role === "bank_officer") {
      next();
    } else {
      return res.status(401).json({
        message: "Permission Denied",
        status: false,
        data: null,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
