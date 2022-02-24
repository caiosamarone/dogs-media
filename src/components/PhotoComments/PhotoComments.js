import React from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../utils/context/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = ({ id, comments, single }) => {
  const { login } = React.useContext(UserContext);
  const [listComments, setComments] = React.useState(() => comments);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [listComments]);

  return (
    <>
      <ul
        className={`${single ? styles.single : ''} ${styles.comment}`}
        ref={ref}
      >
        {listComments.map((c) => (
          <li key={c.comment_ID}>
            <b>{c.comment_author}: </b>
            <span>{c.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm single={single} id={id} setComments={setComments} />
      )}
    </>
  );
};

export default PhotoComments;
