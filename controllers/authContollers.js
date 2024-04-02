import HttpError from "../helpers/HttpError.js";
import { registerUser } from "../services/authServices.js";
export const fetchRegisterUser = async (req, res, next) => {
    try {
     const newUser = await registerUser(req.body)

    req.status(201).json({
        email: newUser.email,
    })
    } catch (error) {
        next(error)
    }
   
}