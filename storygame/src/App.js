import logo from './logo.svg';
import './pages/gamepage/Lobbypage';
import Lobby from './pages/gamepage/Lobbypage';
import Selectch from './pages/gamepage/Selectch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import react from 'react';
import Main from './pages/Main'
import './App.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/Prologue' element={<Lobby/>}></Route>
          <Route path='/selectch' element={<Selectch/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
