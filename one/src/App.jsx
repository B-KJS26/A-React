import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
    </Router>
  )
}
