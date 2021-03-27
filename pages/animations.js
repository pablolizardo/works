import Image from 'next/image'
import React from 'react'
import styles from './animations.module.scss';

function animations({ videos }) {
    const handleMouseEnter = e => {
        try {
            e.target.play()
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleMouseLeave = e => {
        try {
            e.target.pause()
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
      <div>
        <h1>Animations</h1>
        <div className={styles.container}>
          <img src="/play.png" width={140} className={styles.play} />
          {[...new Set(videos)]
            .sort((a, b) => b < a)
            .map((video, index) => (
              <video
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                preload
                playsinline
                poster={'/images/animations/' + video + '.jpg'}
              >
                <source src={'/images/animations/' + video + '.webm'} type="video/webm"></source>
                <source src={'/images/animations/' + video + '.mp4'} type="video/mp4"></source>
              </video>
            ))}
        </div>
      </div>
    );
}

export default animations

const fs = require('fs')
const path = require('path')
export const getStaticProps = async () => {
    // const videos = ['hola', 'mundo', 'piola'];
    const videos = fs.readdirSync(path.join(process.cwd() + '/public/images/animations'))

    return {
        props: {
            videos: videos
                .map(video => video.replace('.mp4', '').replace('.webm', '').replace('.jpg', ''))
                .filter(video => video != '.DS_Store')

        }
    }
}
