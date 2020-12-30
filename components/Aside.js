import React from 'react'
import Image from 'next/image'

function Aside() {
    return (
        <aside>

                <img
                    src="/me.png"
                    alt="Picture of the author"
                    className='profile'
                    width={180}
                    height={180}
                />
            <div>
                <h2>Pablo Lizardo</h2>
                <p className='text-muted'>@pablolizardo</p>
            <p>I'm Pablo from 🇦🇷 Argentina, and I do content on Design and Development. I really enjoy learning languages and frameworks like React and React Native, as well as work in Laravel. I also enjoy wireframing, <abbr title='User Interface'>UI</abbr>, <abbr title='User Experience'>UX</abbr>, and design in general.</p>
            </div>
        </aside>
    )
}

export default Aside
