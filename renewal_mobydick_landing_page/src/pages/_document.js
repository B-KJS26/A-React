import { Html, Head, Main, NextScript } from 'next/document'
import styles from '@/styles/globals.module.css';
import React from 'react';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <style>
          {loader}
        </style>
      </head>
      <body className={styles.body}>
        <div className={styles.jebal}>
          <img src='/images/log.png' className={styles.loging}></img>
          <div className={styles.globalLoader}>
            <div className={styles.loader}>
              <div />
            </div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
