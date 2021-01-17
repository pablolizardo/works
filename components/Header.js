import React from 'react'
import Link from 'next/link'
import links from '../content/links'

function Header() {
    
    return (
        <header >
            {links.map( (link,index) => <Link key={index} href={link.path}>{link.title}</Link> )}
        </header>
    )
}

export default Header

