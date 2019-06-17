import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Demo from "./Demo";
import articles from "./data/articles.json";

<<<<<<< HEAD
const querystring = window.location.search || "";
=======
const querystring = window.location.search || '';
>>>>>>> aa738c852070895e1752c7e5c9618630cdbc0134

if (querystring.toLowerCase() === "?demo=true") {
  ReactDOM.render(<Demo />, document.getElementById("root"));
} else {
<<<<<<< HEAD
  ReactDOM.render(
    <App articles={Object.values(articles)} />,
    document.getElementById("root")
  );
}
=======
    ReactDOM.render(<App />, document.getElementById('root'));
}
>>>>>>> aa738c852070895e1752c7e5c9618630cdbc0134
