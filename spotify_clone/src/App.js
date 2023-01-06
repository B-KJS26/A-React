import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import Footer from './pages/Footer/Footer'
import Premium from './pages/Premium/Premium';
import Header from './pages/Header/Header';
import Download from './pages/download/Download';
import Help from './pages/Help/Help';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/premium' element={<Premium/>}></Route>
          <Route path='/download' element={<Download/>}></Route>
          <Route path='/help' elemen={<Help/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
