import HttpError from "../helpers/HttpError.js";
import { findUser, registerUser } from "../services/authServices.js";
import bcrypt from 'bcrypt';

export const fetchRegisterUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await findUser({ email });
        if (existingUser) {
            throw HttpError(409, "Email is already in use");
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await registerUser({...req.body, password: hashPassword});
        const responseBody = {
            user: {
                email: newUser.email,
                subscription: newUser.subscription
            }
        };
        res.status(201).json(responseBody);
    } catch (error) {
       next(error)
    }
};


