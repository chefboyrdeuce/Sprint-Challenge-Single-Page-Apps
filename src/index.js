import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import CharacterList from "./components/CharacterList";

ReactDOM.render(
  <Router>
    <App />
    <CharacterList />
  </Router>,
  document.getElementById("root")
);
