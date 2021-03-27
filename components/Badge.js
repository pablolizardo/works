import React from 'react'
import styles from './Badge.module.css';
function Badge({children:label, color}) {
    const colors = {
      '': 'gray',
      'CSS': 'yellow',
      'CSS Arch': 'yellow',
      'CSS Modules': 'yellow',
      Backend: 'purple',
      FrontEnd: 'blue',
      Mobile: 'teal',
      React: 'teal',
      ReactJS: 'teal',
      Figma: 'gray',
      NextJS: 'blue',
      laravel: 'red',
      Godot: 'blue',
      vue: 'teal',
      vueJS: 'teal',
      tailwind: 'green',
      tailwindcss: 'green',
      mysql: 'pink',
      Game: 'red',
      Blender: 'orange',
      b3d: 'orange',
      '3D': 'green',
      phaser: 'gray'

    };
    const newcolor = Object
      .entries(colors)
      .find(([nam]) => nam.toLowerCase().indexOf(label.toLowerCase()) > -1 ) ? 
      Object
      .entries(colors)
      .find(([nam]) => nam.toLowerCase().indexOf(label.toLowerCase()) > -1 )[1]
      : 'gray'
    return (
      <span
        className={styles.container}
        style={{
          backgroundColor: `var(--color-${newcolor}-light)`,
          color: `var(--color-${newcolor})`,
        }}
      >
        {label}
      </span>
    );
}

export default Badge
