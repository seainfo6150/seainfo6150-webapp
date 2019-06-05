import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>CSS Module example</header>
    </section>
  );
};

export default CSSModule;
