import express from "express";
import routes from "./src/routes.js";

const app = express();
app.use(express.json());

app.use(routes.getRouter());

app.listen(3333, () => console.info("Server is running"));
