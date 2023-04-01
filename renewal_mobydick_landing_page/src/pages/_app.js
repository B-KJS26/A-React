import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  function wait(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 500) {
      now = Date.now();
    }
  }
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('jebal');
      wait(1);
      if (loader)
        loader.style.display = 'none';
    }
  }, []);
  return <Component {...pageProps} />
}
