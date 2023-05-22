import React from 'react';
import '../styles/global.css';

const AppWrapper = ({ Component, pageProps }) => {
  return (<Component {...pageProps} />)
}

export default function App(props) {
  return <AppWrapper {...props} />
}
