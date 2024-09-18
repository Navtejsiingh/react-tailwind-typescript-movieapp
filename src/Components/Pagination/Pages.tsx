import React, { useState } from 'react'
import { useMyContext } from '../../Contexts/MyContext'

const Pages: React.FC = () => {
    const { pages, setPages } = useMyContext();
    console.log(pages)
    return (
        <div className="Pages">
            <nav aria-label="Page navigation example">
                <ul className="list-style-none flex">
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#">Previous</a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#">1</a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Pages