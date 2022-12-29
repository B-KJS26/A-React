import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import Footer from './pages/Footer/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
