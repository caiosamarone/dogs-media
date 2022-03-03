import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Photo from './components/Photo/Photo';
import Footer from './modules/Footer/Footer';
import Header from './modules/Header/Header';
import Login from './modules/Login/Login';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import User from './pages/User/User';
import UserProfile from './pages/User/UserProfile/UserProfile';
import { UserStorage } from './utils/context/UserContext';
import ProtectedRoute from './utils/routes/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
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
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
