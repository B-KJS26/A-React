import logo from './logo.svg';
import './pages/gamepage/Lobbypage';
import Lobby from './pages/gamepage/Lobbypage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import react from 'react';
import Main from './pages/Main'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/Prologue' element={<Lobby/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
