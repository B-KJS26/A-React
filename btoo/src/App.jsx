import './components/Header/Header.css';
import Header from './components/Header/Header';
import Login from './Login/Login';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
