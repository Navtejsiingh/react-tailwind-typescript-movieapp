import React from 'react'
import logo from "../../assets/bingebuddy-high-resolution-logo.png"
import { useMyContext } from '../../Contexts/MyContext'
const Navbar = () => {
    const { setType } = useMyContext();
    return (
        <div>
            <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <h1 className="text-5xl font-bold text-blue-500 hover:cursor-pointer">BingeBuddy</h1>
                    </div>
                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <a onClick={() => setType('movie')} className="my-2 text-gray-700 transition-colors text-2xl duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 hover:cursor-pointer">Movies</a>
                            <a onClick={() => setType('series')} className="my-2 text-gray-700 transition-colors text-2xl duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 hover:cursor-pointer" >Series</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar