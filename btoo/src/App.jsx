import './components/Header/Header.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
