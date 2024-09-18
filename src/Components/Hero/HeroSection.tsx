import React from 'react'
import Movies from '../Movies/Movies'
import Footer from '../Footer/Footer'
import Pages from '../Pagination/Pages'

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 pb-20 ">
                <div className="md:container flex items-center justify-between h-fit  px-6 mx-auto">
                    <Movies />
                </div>
            </section>
            <div className="flex w-full items-center justify-center p-2">
                <Pages />
            </div>
            <Footer />
        </div>
    )
}

export default HeroSection