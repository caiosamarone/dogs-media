import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, value, onChange, label, name, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
