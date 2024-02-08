import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

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

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
