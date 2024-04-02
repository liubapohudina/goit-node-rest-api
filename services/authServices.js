import User from "../models/User.js";

export const registerUser = data => User.create(data);