import React from 'react';
import Badge from './Badge';
import styles from './BadgeList.module.scss';

export default function BadgesList({ tags, size = 'sm' }) {
  return (
    <div
      className={styles.container}
      style={{
        fontSize: `var(--text-${size})`,
      }}
    >
      {tags.map((tag, j) => (
        <Badge key={j}>{tag}</Badge>
      ))}
    </div>
  );
}
