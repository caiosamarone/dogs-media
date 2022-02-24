import React from 'react';
import { COMMENT_POST } from '../../api/api';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import useFetch from '../../utils/hooks/useFetch';
import Error from '../Error/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <form
      className={`${single ? styles.single : ''} ${styles.form}`}
      onSubmit={handleSubmit}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        className={styles.textarea}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
