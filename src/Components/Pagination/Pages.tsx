import React, { useEffect, useState } from 'react'
import { useMyContext } from '../../Contexts/MyContext'

const Pages: React.FC = () => {
    const { pages, setCurrentPages } = useMyContext();
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageRange, setPageRange] = useState<number[]>([1, 2, 3])
    const totalPages: number = pages.length;

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const newCurrentPage = currentPage + 1;
            setCurrentPage(newCurrentPage);
            if (newCurrentPage > pageRange[2] && newCurrentPage <= totalPages) {
                setPageRange([newCurrentPage, newCurrentPage + 1, newCurrentPage + 2].slice(0, 3));
            }
        }
        if (currentPage === totalPages - 1) {
            setPageRange([totalPages])
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            const newCurrentPage = currentPage - 1;
            setCurrentPage(newCurrentPage);

            if (newCurrentPage < pageRange[0] && newCurrentPage >= 1) {
                setPageRange([newCurrentPage - 2, newCurrentPage - 1, newCurrentPage].slice(-3));
            }
        }
    };

    return (
        <div className="Pages">
            <nav aria-label="Page navigation example">
                <ul className="list-style-none flex">
                    <li>
                        <button
                            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => {
                                handlePrevPage()
                                setCurrentPages(currentPage - 1)
                            }}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                    </li>
                    {pageRange.map((page) => (
                        <li key={page}>
                            <button
                                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${page === currentPage ? 'bg-neutral-300 dark:bg-neutral-600' : ''}`}
                                onClick={() => {
                                    setCurrentPage(page)
                                    setCurrentPages(page)
                                }}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => {
                                handleNextPage()
                                setCurrentPages(currentPage + 1)
                            }}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Pages