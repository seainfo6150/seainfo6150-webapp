import React from "react";
import JSConcepts from "./component-examples/JSConcepts.js";
import HelloUser from "./component-examples/HelloUser.js";
import HelloUserClass from "./component-examples/HelloUserClass.js";
import AddingMachine from "./component-examples/AddingMachine.js";
import CSSModule from "./component-examples/CSSModule/CSSModule.jsx";
import CSSModule2 from "./component-examples/CSSModule2/CSSModule2.jsx";

const Demo = ({ querystring }) => {
  const whichDemo = querystring.match(/\?demo=(.*)/)[1];
  const user = {
    "foo-bar": "baz",
    name: "April Bingham",
    email: "a.bingham@northeastern.edu",
    graduationYear: 2019,
    graduationPath: ["BS","MS", "PhD"],
    classes: {
      INFO6150: { title: "Web UI Engineering"}
    },
    getName: () => { return "April Bingham"; }
  };

  let content;
  switch (whichDemo) {
    case "concepts":
      content = <JSConcepts user={user} />;
      break;
    case "hello":
      content = <HelloUser user={user} />;
      break;
    case "hello-user-class":
      content = <HelloUserClass user={user} />;
      break;
    case "adding":
      content = (
        <AddingMachine startNum={10}>This Is My Adding Machine</AddingMachine>
      );
      break;
    case "cssmodules":
      content = (
        <div>
          <CSSModule />
          <CSSModule2 />
        </div>
      );
      break;
    default:
      return null;
  }

  return <div className="Demo">{content}</div>;
};

export default Demo;
