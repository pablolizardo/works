import React from 'react'
import Image from 'next/image'
import Badge from './Badge'
import SocialMediaLinks from './SocialMediaLinks'

function Aside() {
    return (
        <aside>
            <div>
                <img
                    src="/me.png"
                    alt="Picture of the author"
                    className='profile'
                    width={180}
                    height={180}
                />
                <h2>Pablo Lizardo</h2>
                <SocialMediaLinks />
                <p>I'm Pablo from 🇦🇷 Argentina, and I do content on Design and Development. I really enjoy learning languages and frameworks like React and React Native, as well as work in Laravel. I also enjoy wireframing, <abbr title='User Interface'>UI</abbr>, <abbr title='User Experience'>UX</abbr>, and design in general.</p>
            </div>
            <p className=' text-sm flex flex-wrap gap-sm two-thirds'>
                <Badge color='yellow'>Game</Badge>
                <Badge color='purple'>Backend</Badge>
                <Badge color='green'>3D</Badge>
                <Badge color='red'>CSS Arch</Badge>
                <Badge color='blue'>FrontEnd</Badge>
            </p>
        </aside>
    )
}

export default Aside
