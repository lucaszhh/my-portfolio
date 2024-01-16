import React from 'react'
import Header from '../components/Header'
import Aside from '../components/Aside'


const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <section className=' bg-white text-black dark:bg-black dark:text-white transition'>
            <section className='bg-blue-100 text-black dark:bg-black dark:text-white mx-auto w-4/5 p-4'>
                <Header />
                {children}
            </section>
        </section>
    )
}

export default Layout