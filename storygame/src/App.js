import logo from './logo.svg';
import './pages/gamepage/Lobbypage';
import Lobby from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import react from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
