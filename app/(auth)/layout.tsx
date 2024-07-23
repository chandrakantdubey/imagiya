import React, { ReactNode } from 'react'

const Layout = ({ children }: { childreren: ReactNode }) => {
    return (
        <main className='auth'>{children}</main>
    )
}

export default Layout