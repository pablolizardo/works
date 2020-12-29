import React from 'react'
// CONFIG['pageExcludes'] = [ 'app', 'api', 'index']
import Link from 'next/link'

function Header(props) {
    return (
        <div>
            {props.pages.map(page =>
                <li>{page}</li>
            )}
                {/* <Link  href={page} /> */}
        </div>
    )
}

export default Header

