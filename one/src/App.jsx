import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Download from './components/Download/Download';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/download' element={<Download/>}></Route>
      </Routes>
    </Router>
  )
}
