import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("MongoDB is connected"))
    .catch((error) => console.log(error.message));
};
