import React from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../utils/context/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = ({ id, comments }) => {
  const { login } = React.useContext(UserContext);
  const [listComments, setComments] = React.useState(() => comments);
  {
    console.log(comments);
  }
  return (
    <>
      <ul className={styles.comment}>
        {listComments.map((c) => (
          <li key={c.comment_ID}>
            <b>{c.comment_author}: </b>
            <span>{c.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
