const config = require("./utils/config");
const logger = require("./utils/logger");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const blogRouter = require("./controllers/blogs");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);

logger.info(`connecting to ${config.MONGODB_URI}...`);

mongoose
	.connect(config.MONGODB_URI)
	.then(() => logger.info("connected"))
	.catch((error) => logger.error("connection error", error));

module.exports = app;
