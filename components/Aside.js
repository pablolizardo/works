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
                    alt="Picture of Pablo Lizardo"
                    className='profile'
                    width={180}
                    height={180}
                />
                <h2>Pablo Lizardo</h2>
                <SocialMediaLinks />
                <p>I'm Pablo from 🇦🇷 Argentina, and I do content on Design and Development. I really enjoy learning languages and frameworks like React and React Native, as well as work in Laravel. I also enjoy wireframing, <abbr title='User Interface'>UI</abbr>, <abbr title='User Experience'>UX</abbr>, and design in general.</p>
            </div>
            <p className=' text-sm flex flex-wrap  two-thirds' id='badges'>
                <Badge>Game</Badge>
                <Badge>Backend</Badge>
                <Badge>3D</Badge>
                <Badge>CSS Arch</Badge>
                <Badge>FrontEnd</Badge>
            </p>
        </aside>
    )
}

export default Aside
