import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

function HeaderFixed() {
    const headerRef = useRef()
    useEffect(() => {
        headerRef.current.className = 'slideIn'

    }, [])
    return (
        <div id='header--fixed' ref={headerRef}>
            
            <img
                src="/me.png"
                alt="Picture of the author"
                className='profile'
                width={32}
                height={32}
            />
            <p className='m-0 p-0' style={{ marginLeft: 'var(--space)' }}>Pablo Lizardo</p>

            <Link href={'/'} >projects</Link>
            <Link href={'/repos'} >repos</Link>
            <Link href={'/me'} >about me</Link>
            {/* <Link href={'/'} >home</Link> */}
            {/* <Link href={'/contributions'} >contributions</Link> */}

        </div>
    )
}

export default HeaderFixed
