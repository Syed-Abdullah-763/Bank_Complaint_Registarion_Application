import bankModel from "../models/bank.js";

export const addBankController = async (req, res) => {
  try {
    const { bankName, bankCode } = req.body;

    if (!bankName || !bankCode) {
      return res.status(400).json({
        message: "Required fields are missing.",
        status: false,
        data: null,
      });
    }

    const isExist = await bankModel.findOne({ bankCode });

    if (isExist) {
      return res.status(400).json({
        message: "Bank already exists.",
        status: false,
        data: null,
      });
    }

    const objToSave = {
      bankCode,
      bankName,
    };

    const data = await bankModel.create(objToSave);

    return res.status(200).json({
      message: "Bank registered.",
      status: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const BankDropdownController = async (req, res) => {
  try {
    const data = await bankModel.find({});

    res.status(200).json({
      message: "bank fetch",
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
