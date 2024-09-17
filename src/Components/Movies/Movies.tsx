import React from 'react'
import { useMyContext } from '../../Contexts/MyContext'

type Props = {}
const Movies = (props: Props) => {
    const { setMovies, movies } = useMyContext();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
                <div key={movie.imdbID} className="min-w-80 w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img
                        className="object-cover bg-gray-700 w-full min-w-80 min-h-80 flex items-center justify-center"
                        src={movie.Poster}
                        alt={movie.Title}
                    />
                    <div className="py-5 text-center w-full">
                        <a
                            href={`https://www.imdb.com/title/${movie.imdbID}`}
                            className="block text-xl font-bold text-gray-800 dark:text-white"
                            role="link"
                        >
                            {movie.Title}
                        </a>
                        <span className="text-sm text-gray-700 dark:text-gray-200">{movie.Type}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Movies