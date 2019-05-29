import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Demo from "./Demo";
import articles from "./data/articles.json";

const querystring = window.location.search || "";

if (querystring.toLowerCase() === "?demo=true") {
  ReactDOM.render(<Demo />, document.getElementById("root"));
} else {
  ReactDOM.render(
    <App article={Object.values(articles)[0]} />,
    document.getElementById("root")
  );
}
