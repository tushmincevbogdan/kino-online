import React, { useState, useEffect } from "react";
import PaginationMovie from "./PaginationMovie";
import Pagination from "./Pagination";
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesSuccess, startMoviesRequest, setMoviesError } from "../../redux/Action/action";
import { getFilms } from "../../api/constants";

const defaultCount = 20;

const PaginationApp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { movies, total } = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    getFilms({ page: currentPage, searchValue }).then((jsonResponse) => {
      const { total, items } = jsonResponse.data;
      dispatch(setMoviesSuccess(total, items));
    });
  }, [currentPage]);

  useEffect(() => {
    dispatch(startMoviesRequest());
    setCurrentPage(1);
    getFilms({ page: 1, searchValue }).then((jsonResponse) => {
      if (jsonResponse.error) {
        dispatch(setMoviesError(jsonResponse.error));
      } else {
        const { total, items } = jsonResponse.data;
        dispatch(setMoviesSuccess(total, items));
      }
    });
  }, [searchValue]);

  return (
    <div className="movieApp">
      <Search search={setSearchValue} />
      {searchValue && <div style={{ color: "white", marginLeft: 30 }}>Результаты для поиска по "{searchValue}"</div>}
      <PaginationMovie movies={movies} />
      <Pagination defaultCount={defaultCount} totalCount={total} paginate={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default PaginationApp;
