import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'none';
    }
  }, []);
  return <Component {...pageProps} />
}
