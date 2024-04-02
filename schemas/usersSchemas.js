import Joi from 'joi';
import { emailRegepxp } from '../constants/constUser.js';

export const usersSignUpSchema = Joi.object({
    email: Joi.string().pattern(emailRegepxp).required(),
    password: Joi.string().min(6).required(),
})

export const userSignInSchema = Joi.object({
    email: Joi.string().pattern(emailRegepxp).required(),
    password: Joi.string().min(6).required(),
})