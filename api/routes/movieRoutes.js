import express from "express";
const movieRoutes = express.Router();
import movieController from "../controllers/movieController.js";

movieRoutes.get("/movies", movieController.getAllmovies);
movieRoutes.post("/movies", movieController.createMovie);


export default movieRoutes;