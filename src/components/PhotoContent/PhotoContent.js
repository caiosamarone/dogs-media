import React from 'react';
import { Link } from 'react-router-dom';
import PhotoDelete from '../PhotoDelete/PhotoDelete';
import PhotoComments from '../PhotoComments/PhotoComments';
import styles from './PhotoContent.module.css';
import { UserContext } from '../../utils/context/UserContext';
import Image from '../Image/Image';

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  return (
    <div className={`${single ? styles.single : ''} ${styles.photo}`}>
      <div className={`${styles.img}`}>
        <Image alt={data.title} src={data.photo.src} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === data.photo.author ? (
              <PhotoDelete id={data.photo.id} />
            ) : (
              <Link to={`/perfil/${data.photo.author}`}>
                @{data.photo.author}
              </Link>
            )}

            <span className={styles.visualizacoes}>{data.photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${data.photo.id}`}>{data.photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{data.photo.peso}kg</li>
            <li>{data.photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments
        single={single}
        id={data.photo.id}
        comments={data.comments}
      />
    </div>
  );
};

export default PhotoContent;
