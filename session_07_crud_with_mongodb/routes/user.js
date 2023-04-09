import express from "express";
import * as userCtrls from '../controllers/user.js'

const userRoutes = express.Router();

userRoutes.get('', userCtrls.getAllUsers)
userRoutes.get('', userCtrls.createUser)


export default userRoutes;