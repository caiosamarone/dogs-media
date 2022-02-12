import React from 'react';
import styles from './PhotoComments.module.css';

const PhotoComments = ({ id, comments }) => {
  return <div>{comments.length}</div>;
};

export default PhotoComments;
