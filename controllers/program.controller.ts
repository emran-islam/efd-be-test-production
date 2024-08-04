import { Request, Response, NextFunction } from "express";
import { fetchPrograms, addProgram } from "../models/program.model";
import { Program } from '../program.types';

export function getAllPrograms(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  fetchPrograms()
    .then((programs) => {
      res.status(200).json({ programs });
    })
    .catch((err) => {
      next(err);
    });
}

export function createProgram(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const newProgram: Program = req.body;

  addProgram(newProgram)
    .then((program) => {
      res.status(201).json({ program });
    })
    .catch((err) => {
      next(err);
    });
}
