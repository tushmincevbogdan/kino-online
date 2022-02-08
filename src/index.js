import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  rootReducer from "../src/redux/Reducer/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
