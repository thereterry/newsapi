import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'



const Layout = () => {
    return (

        <section className='container mx- auto border-2 border-yellow-400 md:border-green-400 lg:border-blue-400'>

            <Header />

            <main className='py-8 mx-auto md:px-4'>
                <Outlet />
            </main>

            <Footer />
        </section>
    )
}

export default Layout