import React from "react";
import JsFundamentals from "./component-examples/JsFundamentals.js";
import HelloUser from "./component-examples/HelloUser.js";
import HelloUserClass from "./component-examples/HelloUserClass.js";
import AddingMachine from "./component-examples/AddingMachine.js";
import CSSModule from "./component-examples/CSSModule/CSSModule.jsx";
import CSSModule2 from "./component-examples/CSSModule2/CSSModule2.jsx";

const Demo = ({ querystring }) => {
  const whichDemo = querystring.match(/\?demo=(.*)/)[1];
  
  let content;
  switch (whichDemo) {
    case "concepts":
      content = <JsFundamentals />;
      break;
    // case "hello":
    //   content = <HelloUser />;
    //   break;
    // case "hello-user-class":
    //   content = <HelloUserClass />;
    //   break;
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
