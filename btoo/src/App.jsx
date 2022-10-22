import './components/Header/Header.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='chat' element={<Chat />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
