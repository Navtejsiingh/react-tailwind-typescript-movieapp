import React, { Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { createContext } from 'react'

interface Movie {
    Poster: string
    Title: string
    Year: string
    Type: string
    imdbID: string
}


interface ContextType {
    movies: Movie[]
    setMovies: Dispatch<SetStateAction<Movie[]>>
    searchedMovie: string
    setSearchedMovie: Dispatch<SetStateAction<string>>

}

const MyContext = createContext<ContextType | undefined>(undefined)


export const AppProvier: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [searchedMovie, setSearchedMovie] = useState<string>('avengers')
    return (
        <MyContext.Provider value={{ movies, setMovies, searchedMovie, setSearchedMovie }}>
            {children}
        </MyContext.Provider>
    )
}
export const useMyContext = (): ContextType => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export default MyContext