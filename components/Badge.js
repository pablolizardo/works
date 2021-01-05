import React from 'react'

function Badge({children, color}) {
    const colors = {
        '':'gray',
        'Game':'red',
        'Backend':'purple',
        '3D':'green',
        'CSS Arch':'yellow',
        'FrontEnd':'blue',
        'Mobile':'teal'
    }
    
    return (
        <span className={`badge`} style={{
            backgroundColor: `var(--color-${color || colors[children]}-light)`,
            color: `var(--color-${color || colors[children]})`
        }}>
            {children}
        </span>
    )
}

export default Badge
