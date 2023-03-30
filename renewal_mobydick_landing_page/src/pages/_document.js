import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
import loader from './loader';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <style>
          {loader}
        </style>
      </head>
      <body>
        <div id={'jebal'}>
          <img src='/images/log.png' className='loging'></img>
          <div id={'globalLoader'}>
            <div className="loader">
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
