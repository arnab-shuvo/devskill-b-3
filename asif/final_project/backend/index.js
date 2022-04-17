import express from "express";
import useMiddlewares from "./middlewares.js";
import routes from "./routes.js";
const app = express();

useMiddlewares(app);
routes(app);

app.use((req, res, next) => {
  const error = new Error("invalid route");
  error.status = 404;
  next(error);
});
app.use((req, res, next, error) => res.status(404).json({ error }).end());

app.listen(8000, () => console.log("server is running on port 8000"));
