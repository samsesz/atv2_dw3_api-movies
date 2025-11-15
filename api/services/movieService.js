import Movie from "../models/Movies.js";

class movieService {
  async getAll() {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  }

  async Create(title, genre, year, director) {
    try {
      const newMovie = new Movie({
        title,
        genre,
        year,
        director,
      });
      await newMovie.save();
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id) {
    try {
      const movie = await Movie.findById(id);
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new movieService();
