import express from "express";
import programRoutes from "./routes/program.routes";

const app = express();

app.use(express.json());
app.use("/api", programRoutes);

export default app;
