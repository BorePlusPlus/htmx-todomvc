import "@kitajs/html/register";
import bodyParser from "body-parser";
import express from "express";
import { handlers as initHandlers } from "./controller/handlers";
import { Todo } from "./model/todo";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

initHandlers(app, new Todo());

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export { app, server };
