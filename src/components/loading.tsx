// components/Loading.js
import React from 'react';
import styles from '../styles/Loading.module.css'; 
import Image from 'next/image';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingBar}>
        <div className={styles.logoContainer}>
        <Image
          className={styles.loadingLogo}
          src="/logo.png"
          alt="logo"
          width={250}
          height={250}
        />
        </div>
      </div>
    </div>
  );
};

export default Loading;
