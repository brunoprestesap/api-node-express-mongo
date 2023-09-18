/* eslint-disable no-unused-vars */
import express from "express";
import connect from "./config/db.config.js";
import routes from "./routes/index.js";
import * as dotenv from "dotenv";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

const app = express();
dotenv.config();
connect();

routes(app);

app.use(manipuladorDeErros);

export default app;