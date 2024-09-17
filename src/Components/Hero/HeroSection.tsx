import React from 'react'
import Movies from '../Movies/Movies'

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 ">
                <div className="container flex items-center justify-between h-fit  px-6 mx-auto">
                    <Movies />
                </div>
            </section>
        </div>
    )
}

export default HeroSection