import React, { useState } from "react";
import { useParams } from "react-router-dom";
import spinner from "../img/ajax-loader.gif";
import { getFilmDetails } from "../api/constants";
import "./MoviePage.css";

const MoviePage = () => {
  const { id } = useParams();
  const [stateMovie, setStateMovie] = useState(null);

  useState(() => {
    getFilmDetails(id).then(({ data }) => setStateMovie(data));
  }, [id]);

  if (stateMovie === null) {
    return <img className="spinner" src={spinner} alt="Loading spinner" />;
  }

  return (
    <div className="pageMovie">
      <div className="movie__cover-inner">
        <img className="movie__cover" alt={`The movie titled: ${stateMovie.nameRu}`} src={stateMovie.posterUrl} />
      </div>
      <div className="movie__info">
        <div className="movie__title">{stateMovie.nameRu}</div>
        <div className="movie__category">{stateMovie.genres.map((genre) => ` ${genre.genre}`)}</div>
        <div className="movie__description">{stateMovie.description}</div>
        <div className="movie__ratingKinopoisk">{`Rating:${stateMovie.ratingKinopoisk}`}</div>
      </div>
    </div>
  );
};

export default MoviePage;
