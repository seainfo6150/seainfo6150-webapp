import React from "react";
import JsFundamentals from "./component-examples/JsFundamentals.js";
import HelloUser from "./component-examples/HelloUser.js";
import HelloUserClass from "./component-examples/HelloUserClass.js";
import AddingMachine from "./component-examples/AddingMachine.js";
import AddingMachineHooks from "./component-examples/AddingMachineHooks.js";
import List from "./component-examples/List.js";
import CSSModule from "./component-examples/CSSModule/CSSModule.jsx";
import CSSModule2 from "./component-examples/CSSModule2/CSSModule2.jsx";

const Demo = ({ querystring }) => {
  const whichDemo = querystring.match(/\?demo=(.*)/)[1];

  const users = [
    {
      name: "April Bingham",
      id: 1
    },
    {
      name: "Tom Cruise",
      id: 2
    },
    {
      name: "Mickey Mouse",
      id: 3
    },
    {
      name: "Beyonce",
      id: 4
    }
  ]
  
  let content;
  switch (whichDemo) {
    case "concepts":
      content = <JsFundamentals />;
      break;
    case "hello-user":
      content = <HelloUser user={users[0]} />;
      break;
    case "hello-user-class":
      content = <HelloUserClass user={users[0]} />;
      break;
    case "adding":
      content = (
        <AddingMachine startNum={10}>This Is My Adding Machine</AddingMachine>
      );
      break;
    case "adding-hooks":
      content = (
        <AddingMachineHooks startNum={10}>This Is My Adding Machine</AddingMachineHooks>
      );
      break;
    case "list":
      content = (
        <List list={users} />
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
