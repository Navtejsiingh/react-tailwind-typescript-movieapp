import { useMyContext } from '../../Contexts/MyContext'

type Props = {}
const Movies = (props: Props) => {
    const { movies, response } = useMyContext();
    if (!response) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }
    return (
        <>
            {movies ? (
                <div className="grid lg:grid-cols-5 gap-4 w-full">
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className="min-w-full w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img
                                className="object-cover bg-gray-700 w-full min-w-80 min-h-80 flex items-center justify-center"
                                src={movie.Poster}
                                alt={movie.Title}
                            />
                            <div className="py-5 px-5 text-left w-full">
                                <div>
                                    <a
                                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                                        className="block text-xl font-bold text-gray-800 dark:text-white"
                                        role="link"
                                    >
                                        {movie.Title}
                                    </a>
                                    <span className="text-xl text-gray-700 dark:text-gray-200">Type: {movie.Type}</span><br />
                                    <span className="text-xl text-gray-700 dark:text-gray-200">Release: {movie.Year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <> No Match Found... </>
            )}
        </>
    );
}

export default Movies