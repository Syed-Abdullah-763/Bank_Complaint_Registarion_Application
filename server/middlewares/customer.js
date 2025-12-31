import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

export const customerMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const isVerify = jwt.verify(token, process.env.PRIVATE_KEY);

    if (!isVerify) {
      return res.status(401).json({
        message: "UnAth user",
        status: false,
      });
    }

    const user = await userModel.findById({ _id: isVerify._id }).select("role");

    if (!user) {
      return res.status(401).json({
        message: "UnAth user",
        status: false,
      });
    }

    if (user.role === "customer") {
      req.user = user;
      next();
    } else {
      return res.status(401).json({
        message: "Permission Denied",
        status: false,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "UnAth user",
      status: false,
    });
  }
};
