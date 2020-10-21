import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";

import styles from "../examples.module.css";

import JsFundamentalsArrays from "./JsFundamentalsArrays";
import JsFundamentalsControlStructures from "./JsFundamentalsControlStructures";
import JsFundamentalsDataTypes from "./JsFundamentalsDataTypes";
import JsFundamentalsFunctions from "./JsFundamentalsFunctions";
import JsFundamentalsObjects from "./JsFundamentalsObjects";
import JsFundamentalsOperators from "./JsFundamentalsOperators";
import JsFundamentalsVariables from "./JsFundamentalsVariables";
import JsFundamentalsDataFetching from "./JsFundamentalsDataFetching";

const JsFundamentals = (props) => {
  let { url } = useRouteMatch();
  const topics = [
    "arrays",
    "controlstructures",
    "datatypes",
    "functions",
    "objects",
    "operators",
    "variables",
    "datafetching",
  ];
  return (
    <section>
      <header><h1>JsFundamentals component</h1></header>
      <nav>
        <ul className={styles.list}>
          {topics.map((t) => (
            <li className={styles.listItem} key={t}>
              <Link to={`${url}/${t}`}>{t}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route path={`${url}/arrays`}><JsFundamentalsArrays /></Route>
        <Route path={`${url}/controlstructures`}><JsFundamentalsControlStructures /></Route>
        <Route path={`${url}/datatypes`}><JsFundamentalsDataTypes /></Route>
        <Route path={`${url}/functions`}><JsFundamentalsFunctions /></Route>
        <Route path={`${url}/objects`}><JsFundamentalsObjects /></Route>
        <Route path={`${url}/operators`}><JsFundamentalsOperators /></Route>
        <Route path={`${url}/variables`}><JsFundamentalsVariables /></Route>
        <Route path={`${url}/datafetching`}><JsFundamentalsDataFetching /></Route>
      </Switch>
    </section>
  );
};

export default JsFundamentals;
