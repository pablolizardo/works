import React from 'react'
import Link from 'next/link'

function Header() {
    
    return (
        <header >
            <Link href={'/'} >Projects</Link>
            <Link href={'/blog'} >Blog</Link>
            <Link href={'/repos'} >Repos</Link>
            <Link href={'/me'} >About me</Link>
            {/* <Link href={'/'} >home</Link> */}
            {/* <Link href={'/contributions'} >contributions</Link> */}
        </header>
    )
}

export default Header

