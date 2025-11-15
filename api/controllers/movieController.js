import movieService from "../services/movieService.js";

const getAllmovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, genre, year, director } = req.body;
    await movieService.Create(title, genre, year, director);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const getOneMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const movie = await movieService.getOne(id);
      if (movie) {
        res.status(404).json({ error: "Filme não encontrado" });
      } else {
        res.status(200).json({ movie: movie });
      }
    } else {
      res.status(400).json({ error: "ID inválido" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default { getAllmovies, createMovie, getOneMovie };
