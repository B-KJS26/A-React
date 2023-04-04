import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
