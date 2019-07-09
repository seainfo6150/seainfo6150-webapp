import React from 'react';
import styles from './NewsHeader.module.css';

const NewsHeader = () => (
  <div className={styles.newsHeader}>
    <h1 className={styles.title}>The INFO6150 News</h1>
    <time dateTime = "Wed, June 26, 2019">Wed, June 26, 2019</time>
  </div>
);

export default NewsHeader;