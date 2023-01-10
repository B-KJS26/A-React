import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import Footer from './pages/Footer/Footer'
import Premium from './pages/Premium/Premium';
import Header from './pages/Header/Header';
import Download from './pages/download/Download';
import Help from './pages/Help/Help';
import Pay from './pages/Help/Pay/Pay'
import Apps from './pages/Help/App/Apps';
import Premiums from './pages/Help/Premiums/Premiums';
import Device from './pages/Help/Device/Device';
import Account from './pages/Help/Account/Account';
import Privacy from './pages/Help/Privacy/Privacy';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/premium' element={<Premium/>}></Route>
          <Route path='/download' element={<Download/>}></Route>
          <Route path='/help' element={<Help/>}></Route>
          <Route path='/payhelp' element={<Pay/>}></Route>
          <Route path='/apphelp' element={<Apps/>}></Route>
          <Route path='/premiumhelp' element={<Premiums/>}></Route>
          <Route path='/devicehelp' element={<Device/>}></Route>
          <Route path='/privacyhelp' element={<Privacy/>}></Route>
          <Route path='/accounthelp' element={<Account/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
