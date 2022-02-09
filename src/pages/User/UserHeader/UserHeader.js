import React from 'react';
import UserHeaderNav from './UserHeaderNav/UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  const pathnameObject = {
    '/conta/postar': 'Poste sua foto',
    '/conta/estatisticas': 'Estatísticas',
    '/conta': 'Minha Conta',
  };

  React.useEffect(() => {
    const { pathname } = location;
    setTitle(pathnameObject[pathname]);
  }, [location, pathnameObject]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
