import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BadgesList from './BadgesList';
import styles from './WorkLink.module.css';

function WorkLink({ project }) {
  return (
    <Link href={`/projects/${project.fields.slug}`} >
      <a >

        <li className={styles.item}>
          <div className={styles.left}>
            <h2 className={styles.title}>{project.fields.title}</h2>
            <p className={styles.subtitle}>{project.fields.subtitle}</p>
            {project.fields.hashtags && <BadgesList size="xs" tags={project.fields.hashtags} />}
          </div>
          <div className={styles.image}>
            {project.fields.image && (
              <Image alt={project.fields.title} src={`https:${project.fields.image.fields.file.url}`} width={300} height={130} layout="responsive" objectFit="cover" objectPosition="top"></Image>
            )}
          </div>
        </li>
      </a>
    </Link>
  );
}

export default WorkLink;
