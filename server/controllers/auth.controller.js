import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 5);
  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    const { _id, firstname, lastname, email } = await newUser.save();
    res.status(201).json({ _id, firstname, lastname, email });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !bcryptjs.compareSync(password, user.password))
      return next(errorHandler(401, "Login failed!"));

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("Logged out successfully!");
  } catch (e) {
    next(e);
  }
};
