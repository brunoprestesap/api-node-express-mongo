import express from "express";
import connect from "./config/db.config.js";
import routes from "./routes/index.js";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();
connect();

routes(app);

export default app;