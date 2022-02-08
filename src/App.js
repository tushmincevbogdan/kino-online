import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import MoviePage from "./components/MoviePage";
import PersonalArea from "./components/PersonalArea";
import PaginationApp from "./components/Pagination/PaginationApp";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={PaginationApp} />
            <Route path="/movie/:id" component={MoviePage} />
            <Route path="/PersonalArea" component={PersonalArea} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
