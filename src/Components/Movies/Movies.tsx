import React from 'react'

type Props = {}

const Movies = (props: Props) => {
    return (
        <div>
            <div className="min-w-80 w-full   overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover bg-gray-700 w-full min-w-80 min-h-80 flex items-center justify-center" src="" alt="Poster" />

                <div className="py-5 text-center w-full">
                    <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">John Doe</a>
                    <span className="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
                </div>
            </div>
        </div>
    )
}

export default Movies