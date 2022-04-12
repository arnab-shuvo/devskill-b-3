import express from "express";
import useMiddlewares from "./middlewares.js";
import routes from "./routes.js";
const app = express();

useMiddlewares(app);
routes(app);

app.listen(8000, () => console.log("server is running on port 8000"));
