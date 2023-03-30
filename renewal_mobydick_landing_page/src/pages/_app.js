import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('jebal');
      if (loader)
        setTimeout(() => loader.style.display = 'none', 100);
    }
  }, []);
  return <Component {...pageProps} />
}
