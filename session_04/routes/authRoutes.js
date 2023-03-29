import express from "express";

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {});
authRouter.post("/register", (req, res) => {});

export default authRouter;
