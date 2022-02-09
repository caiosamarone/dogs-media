import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/context/UserContext';
import LoginCreate from './LoginCreate/LoginCreate';
import LoginForm from './LoginForm/LoginForm';
import LoginPasswordLost from './LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset/LoginPasswordReset';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (login) {
      navigate('/conta');
    }
  }, [login, navigate]);

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
