import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import morganBody from "morgan-body";

const app = express();
configDotenv();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

morganBody(app);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
