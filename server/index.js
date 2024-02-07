import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
