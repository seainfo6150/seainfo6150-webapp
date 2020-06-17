import React, { useState } from "react";
import PropTypes from "prop-types";

import JsFundamentalsArrays from "./JsFundamentalsArrays";
import JsFundamentalsControlStructures from "./JsFundamentalsControlStructures";
import JsFundamentalsDataTypes from "./JsFundamentalsDataTypes";
import JsFundamentalsFunctions from "./JsFundamentalsFunctions";
import JsFundamentalsObjects from "./JsFundamentalsObjects";
import JsFundamentalsOperators from "./JsFundamentalsOperators";
import JsFundamentalsVariables from "./JsFundamentalsVariables";

const JsFundamentals = (props) => {
  const topics = [
    "arrays",
    "controlstructures",
    "datatypes",
    "functions",
    "objects",
    "operators",
    "variables",
  ];
  const [topic, setTopic] = useState("");
  function onSelectTopic(topic) {
    setTopic(topic);
  }
  
  let displayContent;
  switch (topic) {
    case "arrays":
      displayContent = <JsFundamentalsArrays />;
      break;
    case "controlstructures":
      displayContent = <JsFundamentalsControlStructures />;
      break;
    case "datatypes":
      displayContent = <JsFundamentalsDataTypes />;
      break;
    case "functions":
      displayContent = <JsFundamentalsFunctions />;
      break;
    case "objects":
      displayContent = (
        <JsFundamentalsObjects />
      );
      break;
    case "operators":
      displayContent = <JsFundamentalsOperators />;
      break;
    case "variables":
      displayContent = <JsFundamentalsVariables />;
      break;
    default:
      displayContent = "";
      break;
  }

  return (
    <section>
      <header>JsFundamentals component</header>
      <nav>
        {topics.map((t) => (
          <button key={t} onClick={() => onSelectTopic(t)}>
            {t}
          </button>
        ))}
      </nav>
      {displayContent}
    </section>
  );
};

JsFundamentals.propTypes = {
  user: PropTypes.object.isRequired,
};

export default JsFundamentals;
