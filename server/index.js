import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to MongoDB.");
  })
  .catch((err) => {
    console.error("connection to MongoDB failed: ", err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listings", listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Unhandled Error!";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
