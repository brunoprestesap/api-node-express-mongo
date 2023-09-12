import express from "express"
import connect from "./config/db.config.js"
import routes from "./routes/index.js"

const app = express()
connect()

routes(app)

export default app