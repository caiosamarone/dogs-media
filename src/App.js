import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './modules/Footer/Footer';
import Header from './modules/Header/Header';
import Login from './modules/Login/Login';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import { UserStorage } from './utils/context/UserContext';
import ProtectedRoute from './utils/routes/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
