"use client"

import React from 'react';
import styles from '../styles/slide.module.css';

const Slide = () => {
  return (
    <div className={styles.TickerWrap}>
      <div className={styles.Ticker}>
        <span className={styles.ItemCollection1}>
          <span className={styles.Item}>$WONK 🟢 $WONK 🟢 $WONK 🟢 $WONK 🟢</span>
          <span className={styles.Item}>$WONK 🟢 $WONK 🟢 $WONK 🟢 $WONK 🟢</span>
          <span className={styles.Item}>$WONK 🟢 $WONK 🟢 $WONK 🟢 $WONK 🟢</span>
          <span className={styles.Item}>$WONK 🟢 $WONK 🟢 $WONK 🟢 $WONK 🟢</span>
        </span>
        <span className={styles.itemCollection2}>
          <span className={styles.Item}>$WONK 🟢 $WONK 🟢 $WONK 🟢 $WONK 🟢</span>
          <span className={styles.Item}>$WONK 🟢 $WONK 🟢 $WONK 🟢 $WONK 🟢</span>
          <span className={styles.Item}>$WONK 🟢 $WONK 🟢 $WONK 🟢 $WONK 🟢</span>
          <span className={styles.Item}>$WONK 🟢 $WONK 🟢 $WONK 🟢 $WONK 🟢</span>
        </span> 
      </div>
    </div>
  );
};

export default Slide;
