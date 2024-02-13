import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const updateUser = async (req, res, next) => {
  let { firstname, lastname, password } = req.body;

  // validate against JWT
  if (req.userId !== req.params.id) {
    return next(errorHandler(403, "Forbidden!"));
  }
  try {
    if (password) {
      password = bcryptjs.hashSync(password, 5);
    }

    const updated = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          firstname: firstname,
          lastname: lastname,
          password: password,
        },
      },
      { new: true },
    );
    const { password: pass, ...rest } = updated._doc;

    res.status(200).json(rest);
  } catch (e) {
    next(e);
  }
};
