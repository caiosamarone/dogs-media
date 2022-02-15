import React from 'react';
import { PHOTO_DELETE } from '../../api/api';
import useFetch from '../../utils/hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch();
  const handleDelete = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  };

  return (
    <div>
      <button
        disabled={loading}
        className={styles.delete}
        onClick={handleDelete}
      >
        Deletar
      </button>
    </div>
  );
};

export default PhotoDelete;
