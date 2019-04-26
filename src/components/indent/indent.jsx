import React from 'react';
import styles from './indent.module.scss';

export const Indent = ({ children }) => {
  return <div className={styles.indent}>{children}</div>;
};
