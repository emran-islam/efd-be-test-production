import { Router } from "express";
import { fetchPrograms } from "../models/program.model";
import { getAllPrograms, createProgram } from "../controllers/program.controller";

const router = Router();

router.get("/programs", (req, res) => {
  fetchPrograms()
    .then((programs) => res.json({ programs }))
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.post('/programs', createProgram);

export default router;
