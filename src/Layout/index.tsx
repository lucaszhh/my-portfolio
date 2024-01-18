import React from 'react'
import Header from '../components/Header'


const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <section className=' bg-white text-black dark:bg-black dark:text-white transition'>
            <section className=' text-black  dark:text-white mx-auto sm:w-4/5 p-4 max-w-screen-xl'>
                <Header />
                {children}
            </section>
        </section>
    )
}

export default Layout