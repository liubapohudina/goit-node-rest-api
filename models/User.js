import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";
import { emailRegepxp } from "../constants/constUser.js";

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      match: emailRegepxp, 
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }
  },
  { versionKey: false }
);

userSchema.post("save", handleSaveError);
const User = model('user', userSchema);

export default User;