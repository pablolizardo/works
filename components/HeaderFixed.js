import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import links from '../content/links'

function HeaderFixed() {
    const headerRef = useRef()
    useEffect(() => {
        headerRef.current.className = 'slideIn'

    }, [])
    return (
        <div id='header--fixed' ref={headerRef}>
            
            <img
                src="/me.png"
                alt="Picture of Pablo Lizardo"
                className='profile'
                width={32}
                height={32}
            />
            <p className='m-0 p-0' style={{ marginLeft: 'var(--space)' }}>Pablo Lizardo</p>

            {links.map( (link,index) => <Link key={index} href={link.path}>{link.title}</Link> )}


        </div>
    )
}

export default HeaderFixed
