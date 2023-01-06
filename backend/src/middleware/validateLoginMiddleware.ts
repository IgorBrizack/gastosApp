import { NextFunction, Request, Response } from "express";

const { loginSchema } = require('../joi/schemas')

export const loginValidation = (req:Request, res:Response, next:NextFunction) => {
  const { body: { email, password } } = req;

  const { error } = loginSchema.validate({ email, password });
    if (error) return res.status(400).json({ message: error.message });
   
    next();
};