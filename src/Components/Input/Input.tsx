import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useMyContext } from '../../Contexts/MyContext'
type Props = {}

const Input = (props: Props) => {
    const { setSearchedMovie } = useMyContext()
    const [movieInput, setMovieInput] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setMovieInput(value);
        if (!value.trim()) {
            setSearchedMovie('avengers')
        }
    };

    const handleClick = () => {
        if (movieInput.trim()) {
            setSearchedMovie(movieInput);
        }
    };

    useEffect(() => {
    }, [])

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-3xl px-6 py-16 mx-auto text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Your Search For Movies End Here!</h1>
                    <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Get Amazing Suggestions</p>
                    <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                        <input onChange={handleChange} id="email" name='SearchMovies' type="text" className=" h-10 px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search..." />
                        <button onClick={handleClick} type='submit' className=" h-10 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Search
                        </button>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Input