import React from 'react'
import styles from './Badge.module.css';
function Badge({children, color}) {
    const colors = {
      '': 'gray',
      Game: 'red',
      Backend: 'purple',
      '3D': 'green',
      'CSS Arch': 'yellow',
      FrontEnd: 'blue',
      Mobile: 'teal',
      'CSS Modules': 'green',
      ReactJS: 'teal',
    };
    
    return (
      <span
        className={styles.container}
        style={{
          backgroundColor: `var(--color-${color || colors[children]}-light)`,
          color: `var(--color-${color || colors[children]})`,
        }}
      >
        {children}
      </span>
    );
}

export default Badge
