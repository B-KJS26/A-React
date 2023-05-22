import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from './pages/Lobby/Lobby';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lobby />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
