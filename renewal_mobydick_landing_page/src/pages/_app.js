import React from 'react';
import '../styles/global.css';

const AppWrapper = ({ Component, pageProps }) => {
  return (<Component {...pageProps} />)
}

export default function App(props) {
  function wait(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 800) {
      now = Date.now();
    }
  }

  wait(1);
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('jebal');
      if (loader)
        loader.style.opacity = '0';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  return <AppWrapper {...props} />
}
