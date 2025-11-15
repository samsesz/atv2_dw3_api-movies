import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/components/ListMovie/ListMovie.module.css";
import { getPoster } from "@/utils/getPoster";


const movieService = {
  async getAllMovies() {
    try {
      const API_BASE_URL = "http://localhost:4000";
      const response = await fetch(`${API_BASE_URL}/movies`);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      return data.movies || data;
    } catch (error) {
      console.error("Erro no serviço de filmes:", error);
      throw error;
    }
  },
};

const ListMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await movieService.getAllMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={styles.listMovie}>
      <div className={styles.listMoviesCard}>
        <div className={styles.title}>
          <h2>Lista de filmes</h2>
        </div>

        <div className={styles.moviesGrind}>
          {movies.length === 0 ? (
            <p>Nenhum filme cadastrado.</p>
          ) : (
            movies.map((movie) => (
              <article key={movie._id} className={styles.movieCard}>
                <div className={styles.posterWrap}>
                  <img
                    className={styles.poster}
                    src={getPoster(movie.title)}
                    alt={`Poster de ${movie.title}`}
                  />
                </div>

                <div className={styles.info}>
                  <h3 className={styles.movieTitle}>{movie.title}</h3>
                  <p className={styles.meta}>
                    <span>{movie.year || "—"}</span>
                    <span>★</span>
                    <span>{movie.director || "—"}</span>
                  </p>

                  <ul className={styles.details}>
                    <li>Gênero: {movie.genre}</li>
                    <li>Ano: {movie.year}</li>
                    <li>Diretor: {movie.director}</li>
                  </ul>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
