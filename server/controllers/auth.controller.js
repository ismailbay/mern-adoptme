import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 5);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    const { _id, username, email } = await newUser.save();
    res.status(201).json({ _id, username, email });
  } catch (error) {
    next(error);
  }
};
