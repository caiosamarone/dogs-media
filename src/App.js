import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './modules/Footer/Footer';
import Header from './modules/Header/Header';
import Login from './modules/Login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
