import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../../utils/context/UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs Home" className={styles.logo}>
          <Dogs />
        </Link>
        {data?.username ? (
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link to="/conta" className={styles.login}>
              {data.nome}
            </Link>
          </div>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
