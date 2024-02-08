import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

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
