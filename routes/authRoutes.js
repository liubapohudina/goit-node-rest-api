import express from 'express';
import { fetchRegisterUser, fetchLoginUser } from '../controllers/authContollers.js';
import { userSignInSchema, usersSignUpSchema } from '../schemas/usersSchemas.js';
import validateBody from '../helpers/validateBody.js';

const authRouter = express.Router();
authRouter.post('/register', validateBody(usersSignUpSchema), fetchRegisterUser);
authRouter.post('/login', validateBody(userSignInSchema), fetchLoginUser)

export default authRouter;