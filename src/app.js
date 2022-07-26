import express from "express";
import {createServer}  from "http";
import { router } from "./routes/routes.js";
const app = express();
const server = createServer(app);

app.use(express.json());
app.use(router);

export { server }