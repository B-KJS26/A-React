import React from 'react';
import '../styles/global.css';

const AppWrapper = ({ Component, pageProps }) => {
  return (<Component {...pageProps} />)
}

export default function App(props) {
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
  return <AppWrapper {...props} />
}
