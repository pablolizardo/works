import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <nav>
            <Link href={'/'} >Home</Link>
            <Link href={'/apps'} >Apps</Link>
            <Link href={'/experience'} >Experience</Link>
            <Link href={'/repos'} >Repos</Link>
            <Link href={'/me'} >Me</Link>
        </nav>
    )
}

export default Header

