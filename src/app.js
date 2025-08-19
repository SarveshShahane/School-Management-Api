import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => res.json({ status: "ok" }));
app.use(routes);
export { app};
