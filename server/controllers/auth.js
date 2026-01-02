import jwt from "jsonwebtoken";
import userModel from "../models/user.js";
import bcryptjs from "bcryptjs";

export const signupController = async (req, res) => {
  try {
    const { name, email, password, role, bankId } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "Required fields are missing",
        status: false,
      });
    }

    if (role === "bank_officer" && !bankId) {
      return res.status(400).json({
        message: "Bank ID is required for bank users",
        status: false,
      });
    }

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User already exists",
        status: false,
      });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const objToSave = {
      name,
      email,
      password: hashPassword,
      role,
      bankId,
    };

    const data = await userModel.create(objToSave);

    res.status(201).json({
      message: "User has been created",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Required fields are missing",
        status: false,
      });
    }

    const userExist = await userModel.findOne({ email }).lean();

    if (!userExist) {
      return res.status(400).json({
        message: "Invalid email or password",
        status: false,
      });
    }

    const comparePassword = await bcryptjs.compare(
      password,
      userExist.password
    );

    if (!comparePassword) {
      return res.status(400).json({
        message: "Invalid email or password",
        status: false,
      });
    }

    const token = jwt.sign({ _id: userExist._id }, process.env.PRIVATE_KEY, {
      expiresIn: "24h",
    });

    delete userExist["password"];

    return res.status(200).json({
      message: "User loggedIn Successfully!",
      status: true,
      data: userExist,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};
