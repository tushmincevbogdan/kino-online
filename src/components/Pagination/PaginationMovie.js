import React from "react";
import "./PaginationMovie.css";
import { Link } from "react-router-dom";

const PaginationMovie = ({ movies }) => {

  return (
    <div className="pageMovies">
      {movies.map((movie, i) => (
        <Link to={`/movie/${movie.kinopoiskId}`}>
          <div className="movie">
            <div className="movie__cover-inner">
              <img className="movie__cover" alt={`The movie titled: ${movie.nameRu}`} src={movie.posterUrl} />
              <div className="movie__cover--darkened"></div>
            </div>
            <div className="movie__info">
              <div className="movie__title">{movie.nameRu}</div>
              <div className="movie__category">{movie.genres.map((genre) => ` ${genre.genre}`)}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PaginationMovie;
