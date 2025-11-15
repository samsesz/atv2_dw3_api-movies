import express from "express";
const app = express();
import Movie from "./models/Movies.js";
import movieRoutes from "./routes/movieRoutes.js";
import connect from "./config/db-connection.js";
import 'dotenv/config';
import cors from "cors";

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", movieRoutes);

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});
