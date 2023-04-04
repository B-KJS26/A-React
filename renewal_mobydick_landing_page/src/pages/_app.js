import '@/styles/globals.module.css'
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
      window.scrollTo(0, 0);
    }
  }, []);
  return <Component {...pageProps} />
}
