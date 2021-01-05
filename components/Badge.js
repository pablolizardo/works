import React from 'react'

function Badge({color='gray', children}) {
    return (
        <span className={`badge`} style={{
            backgroundColor: `var(--color-${color}-light)`,
            color: `var(--color-${color})`
        }}>
            {children}
        </span>
    )
}

export default Badge
