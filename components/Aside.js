import React from 'react'
import Image from 'next/image'

function Aside() {
    return (
        <aside>
            <Image
                src="/me.png"
                alt="Picture of the author"
                width={180}
                height={180}
            />
            <h2>Pablo Lizardo</h2>
            <p className='text-muted'>pablolizardo</p>
            <p>I'm Pablo from Argentina, and I do content on Design and Development. I really enjoy learning languages and frameworks like React and React Native, as well as work in Laravel. I also enjoy wireframing, ui, ux, and design in general.</p>
        </aside>
    )
}

export default Aside
