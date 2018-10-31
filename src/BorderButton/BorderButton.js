import React, { Component } from 'react';
import styles from "./BorderButton.module.css";
// import styles from "./BorderButton.module.scss";

import Button from "../Button/Button.js";

const BorderButton  = ({
  children ='This is a border button',
  className = styles.base
}) => (
  <Button className={className}>
    {children}
  </Button>
);
export default BorderButton;
