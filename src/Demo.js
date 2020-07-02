import React, {useState} from "react";
import { Switch, Route, Link, useRouteMatch} from "react-router-dom";
import JsFundamentals from "./component-examples/JsFundamentals.js";
import HelloUser from "./component-examples/HelloUser.js";
import HelloUserClass from "./component-examples/HelloUserClass.js";
import AddingMachine from "./component-examples/AddingMachine.js";
import AddingMachineHooks from "./component-examples/AddingMachineHooks.js";
import List from "./component-examples/List.js";
import CSSModule from "./component-examples/CSSModule/CSSModule.jsx";
import CSSModule2 from "./component-examples/CSSModule2/CSSModule2.jsx";

const Demo = (props) => {
  let {url} = useRouteMatch();

  const users = [
    {
      name: "April Bingham",
      id: 1,
    },
    {
      name: "Tom Cruise",
      id: 2,
    },
    {
      name: "Mickey Mouse",
      id: 3,
    },
    {
      name: "Beyonce",
      id: 4,
    },
  ];

  return (
    <div className="Demo">
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <li>
              <Link to={`${url}/concepts`}>Javascript Fundamentals</Link>
            </li>
            <li>
              <Link to={`${url}/hello-user`}>Hello User</Link>
            </li>
            <li>
              <Link to={`${url}/hello-user-class`}>
                Hello User (class)
              </Link>
            </li>
            <li>
              <Link to={`${url}/adding`}>Adding Machine</Link>
            </li>
            <li>
              <Link to={`${url}/adding-hooks`}>
                Adding Machine (hooks)
              </Link>
            </li>
            <li>
              <Link to={`${url}/list`}>List</Link>
            </li>
            <li>
              <Link to={`${url}/cssmodules`}>CSS Modules</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/* passing parameters via a route path */}
        <Route path={`${url}/concepts`}>
          <JsFundamentals />
        </Route>
        <Route path={`${url}/hello-user`} exact>
          <HelloUser user={users[0]} />
        </Route>
        <Route path={`${url}/hello-user-class`} exact>
          <HelloUserClass user={users[0]} />
        </Route>{" "}
        <Route path={`${url}/adding`} exact>
          <AddingMachine startNum={10}>This Is My Adding Machine</AddingMachine>
        </Route>
        <Route path={`${url}/adding-hooks`} exact>
          <AddingMachineHooks startNum={10}>
            This Is My Adding Machine
          </AddingMachineHooks>
        </Route>
        <Route path={`${url}/list`} exact>
          <List list={users} />
        </Route>
        <Route path={`${url}/cssmodules`} exact>
          <>
            <CSSModule />
            <CSSModule2 />
          </>
        </Route>
        <Route path={`${url}/baz`} exact>
          <div>Hello</div>
        </Route>
        <Route path={`${url}`}>
          <div>Welcome</div>
        </Route>
        <Route>
          <div>Error</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Demo;
