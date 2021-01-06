import React from 'react'
import Link from 'next/link'

function Header() {
    
    return (
        <header >
            <Link href={'/'} >projects</Link>
            <Link href={'/repos'} >repos</Link>
            <Link href={'/me'} >about me</Link>
            {/* <Link href={'/'} >home</Link> */}
            {/* <Link href={'/contributions'} >contributions</Link> */}
        </header>
    )
}

export default Header

